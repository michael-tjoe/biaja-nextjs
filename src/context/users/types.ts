import { Dispatch } from "react";

export interface UserInfo {
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  registered: {
    date: string;
    age: number;
  };
}

export interface PageStatusData {
  currentPage: number;
  keyword: string;
  sortBy: string;
  sortOrder: string;

  filter: {
    id: string;
    label: string;
  };
}

export type UserActionType =
  | "SET_FILTER"
  | "SET_KEYWORD"
  | "RESET"
  | "SET_SORT_BY"
  | "SET_PAGE";

export interface UsersContextData {
  usersData: Array<UserInfo>;
  pageStatus: PageStatusData;
  isLoading: boolean;
  dispatchPageStatus: Dispatch<{
    type: UserActionType;
    payload?: string | Record<string, unknown>;
  }>;
}
