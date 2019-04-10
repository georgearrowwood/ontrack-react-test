
export function buildPagination(total, limit, page, search) {
  const pagination = {
    pages: [],
  };

  const pageInPaginatorPosition = 4;
  const pagesInPaginatorCount = 10;

  let maxPage = Math.floor(total / limit);
  if (total % limit) maxPage++;

  let startPage;

  if (page <= pageInPaginatorPosition) {
    startPage = 1;
    if (maxPage > pagesInPaginatorCount) {
      pagination.next = {
        page: pagesInPaginatorCount + 1,
        limit,
        search
      };
    }
  } else {
    if (page < maxPage - pageInPaginatorPosition - 1) {
      startPage = page - pageInPaginatorPosition;
      pagination.next = {
        page: startPage + pagesInPaginatorCount + 1,
        limit,
        search
      };
    } else {
      startPage = maxPage - pagesInPaginatorCount;
      if (startPage < 1) startPage = 1;
    }
    if (startPage > 1) {
      pagination.prev = {
        page: startPage - 1,
        limit,
        search
      };
    }
  }

  const endPage = Math.min(startPage + pagesInPaginatorCount, maxPage);

  for (let i = startPage; i < endPage; i++) {
    const pageItem = {
      page: i,
      active: i === page,
      limit,
      search
    };
    pagination.pages.push(pageItem);
  }
  return pagination;
};
