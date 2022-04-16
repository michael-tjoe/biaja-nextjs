import { DEFAULT_FILTER_VALUE } from "@constants/filterOption";
import { EnumSortOrder } from "@constants/tableConfig";
import type { PageStatusData } from "./types";
import EnumAction from "./usersAction";

export function usersReducer(state: PageStatusData, action) {
  switch (action.type) {
    case EnumAction.SET_FILTER:
      return { ...state, currentPage: 1, filter: action.payload };

    case EnumAction.SET_KEYWORD:
      return { ...state, currentPage: 1, keyword: action.payload };

    case EnumAction.SET_PAGE:
      return { ...state, currentPage: action.payload };

    case EnumAction.RESET:
      if (state.filter.id !== DEFAULT_FILTER_VALUE.id || state.keyword)
        return {
          ...state,
          currentPage: 1,
          keyword: "",
          filter: DEFAULT_FILTER_VALUE,
        };

      return state;

    case EnumAction.SET_SORT_BY:
      const currentSortBy = state.sortBy;
      const currentSortOrder = state.sortOrder;
      const newSortedByValue = action.payload;

      if (newSortedByValue === currentSortBy) {
        if (currentSortOrder === EnumSortOrder.ASCENDING) {
          return {
            ...state,
            currentPage: 1,
            sortBy: newSortedByValue,
            sortOrder: EnumSortOrder.DESCENDING,
          };
        } else {
          return {
            ...state,
            currentPage: 1,
            sortBy: "",
            sortOrder: "",
          };
        }
      } else {
        return {
          ...state,
          currentPage: 1,
          sortBy: newSortedByValue,
          sortOrder: EnumSortOrder.ASCENDING,
        };
      }

    default:
      return state;
  }
}
