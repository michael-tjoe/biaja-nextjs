import { DEFAULT_FILTER_VALUE } from "@constants/filterOption";
import noop from "@utils/noop";

export const DEFAULT_PAGE_STATUS = {
  currentPage: 1,
  keyword: "",
  sortBy: "",
  sortOrder: "",
  filter: DEFAULT_FILTER_VALUE,
};

export const INITIAL_USERS_CONTEXT_VALUE = {
  usersData: [],
  pageStatus: DEFAULT_PAGE_STATUS,
  dispatchPageStatus: noop,
  isLoading: false
};

export default INITIAL_USERS_CONTEXT_VALUE;
