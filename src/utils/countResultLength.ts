/* 
    This function will calculate how many data will be displayed based on current page value 
*/

export const countResultLength = (currentPage, pageSize, totalData) => {
  const offset = currentPage * pageSize;
  const hasReachLimit = offset >= totalData;

  if (hasReachLimit) {
    return totalData - (currentPage - 1) * pageSize;
  }

  return pageSize;
};
