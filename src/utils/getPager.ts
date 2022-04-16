export function getPager(totalItems, currentPage, pageSize) {
  const totalPages = Math.ceil(totalItems / pageSize);

  let startPage, endPage;

  if (totalPages <= 10) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }
  }

  return new Array(endPage + 1 - startPage)
    .fill(0)
    .map((d, i) => i + startPage);
}
