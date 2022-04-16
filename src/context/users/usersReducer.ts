import { DEFAULT_FILTER_VALUE } from "@constants/filterOption";
import { EnumSortOrder } from "@constants/tableConfig";
import { PageStatusData } from "./types";
import EnumAction from "./usersAction";

export function usersReducer(state: PageStatusData, action) {
  switch (action.type) {
    case EnumAction.SET_FILTER:
      return { ...state, filter: action.payload };

    case EnumAction.SET_KEYWORD:
      return { ...state, keyword: action.payload };

    case EnumAction.RESET:
      if (state.filter.id !== DEFAULT_FILTER_VALUE.id || state.keyword)
        return { ...state, keyword: "", filter: DEFAULT_FILTER_VALUE };

      return state;

    case EnumAction.SET_SORT_BY:
      const currentSortBy = state.sortBy;
      const currentSortOrder = state.sortOrder;
      const newSortedByValue = action.payload;

      if (newSortedByValue === currentSortBy) {
        if (currentSortOrder === EnumSortOrder.ASCENDING) {
          return {
            ...state,
            sortBy: newSortedByValue,
            sortOrder: EnumSortOrder.DESCENDING,
          };
        } else {
          return {
            ...state,
            sortBy: "",
            sortOrder: "",
          };
        }
      } else {
        return {
          ...state,
          sortBy: newSortedByValue,
          sortOrder: EnumSortOrder.ASCENDING,
        };
      }

    default:
      return state;
  }
}
