import { createContext, useState, ReactNode, useReducer } from "react";
import { usersReducer } from "./usersReducer";
import type { UserInfo } from "./types";

import { DEFAULT_FILTER_VALUE } from "@constants/filterOption";

interface UsersProviderProps {
  initialData: Array<UserInfo>;
  children: ReactNode;
}

const INITIAL_PAGE_STATUS = {
  currentPage: 1,
  keyword: "",
  sortBy: "",
  sortOrder: "",
  filter: DEFAULT_FILTER_VALUE,
};

export const UsersContext = createContext({});

function UsersProvider({ initialData, children }: UsersProviderProps) {
  const [userData, setUserData] = useState(initialData);

  const [pageStatus, dispatchPageStatus] = useReducer(
    usersReducer,
    INITIAL_PAGE_STATUS
  );

  console.log("pageStatus: ", pageStatus);

  return (
    <UsersContext.Provider value={{ userData, pageStatus, dispatchPageStatus }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
