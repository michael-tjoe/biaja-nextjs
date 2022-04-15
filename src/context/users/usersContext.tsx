import { createContext, useState, ReactNode, useReducer } from "react";
import { usersReducer } from "./usersReducer";
import type { UserInfo, UsersContextData } from "./types";

import {
  INITIAL_USERS_CONTEXT_VALUE,
  DEFAULT_PAGE_STATUS,
} from "./initialState";

interface UsersProviderProps {
  initialData: Array<UserInfo>;
  children: ReactNode;
}

export const UsersContext = createContext<UsersContextData>(
  INITIAL_USERS_CONTEXT_VALUE
);

function UsersProvider({ initialData, children }: UsersProviderProps) {
  const [userData, setUserData] = useState(initialData);

  const [pageStatus, dispatchPageStatus] = useReducer(
    usersReducer,
    DEFAULT_PAGE_STATUS
  );

  return (
    <UsersContext.Provider value={{ userData, pageStatus, dispatchPageStatus }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
