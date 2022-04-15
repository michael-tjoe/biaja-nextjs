export const enumAction = {
  SET_FILTER: "set_filter",
  SET_KEYWORD: "set_keyword",
  RESET: "reset",
};

export function reducer(state, action) {
  switch (action.type) {
    case enumAction.SET_FILTER:
      return { ...state, filter: action.payload };

    case enumAction.SET_KEYWORD:
      return { ...state, keyword: action.payload };

    case enumAction.RESET:
      return { ...state, keyword: action.payload };

    default:
      throw new Error();
  }
}
