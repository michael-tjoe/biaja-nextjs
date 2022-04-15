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

export type UserActionType = "set_filter" | "set_keyword" | "reset";

export interface UsersContextData {
  userData: Array<UserInfo>;
  pageStatus: PageStatusData;
  dispatchPageStatus: Dispatch<{
    type: UserActionType;
    payload?: string | Record<string, unknown>;
  }>;
}
