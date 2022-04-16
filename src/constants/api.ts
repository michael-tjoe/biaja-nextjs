export const TOTAL_DATA = 11;
export const PAGE_SIZE = 5;

const includeParam = "?inc=gender,name,email,login,registered";

export const BASE_URL = `https://randomuser.me/api/${includeParam}&pageSize=${PAGE_SIZE}&totalData=${TOTAL_DATA}`;
