import { UserActionType } from "./types";

const actions: {
  [Key in UserActionType]: UserActionType;
} = {
  SET_FILTER: "SET_FILTER",
  SET_KEYWORD: "SET_KEYWORD",
  SET_SORT_BY: "SET_SORT_BY",
  SET_PAGE: "SET_PAGE",
  RESET: "RESET",
};

export default actions;
