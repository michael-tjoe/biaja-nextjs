import EnumAction from "./usersAction";

export function usersReducer(state, action) {
  console.log("action: ", action);
  switch (action.type) {
    case EnumAction.SET_FILTER:
      return { ...state, filter: action.payload };

    case EnumAction.SET_KEYWORD:
      return { ...state, keyword: action.payload };

    // case EnumAction.RESET:
    //   return { ...state, keyword: action.payload };

    default:
      return state;
  }
}
