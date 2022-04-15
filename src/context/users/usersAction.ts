import { UserActionType } from "./types";

const actions: { [key: string]: UserActionType } = {
  SET_FILTER: "set_filter",
  SET_KEYWORD: "set_keyword",
  RESET: "reset",
};

export default actions;
