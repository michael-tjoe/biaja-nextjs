import { DEFAULT_FILTER_VALUE } from "@constants/filterOption";
import EnumAction from "./usersAction";

export function usersReducer(state, action) {
  switch (action.type) {
    case EnumAction.SET_FILTER:
      return { ...state, filter: action.payload };

    case EnumAction.SET_KEYWORD:
      return { ...state, keyword: action.payload };

    case EnumAction.RESET:
      return { ...state, keyword: "", filter: DEFAULT_FILTER_VALUE };

    default:
      return state;
  }
}
