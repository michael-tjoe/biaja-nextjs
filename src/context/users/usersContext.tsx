import { createContext, useState, ReactNode, useReducer } from "react";
import useDebounce from "@hooks/useDebounce";
import { BASE_URL as API_URL, PAGE_SIZE, TOTAL_DATA } from "@constants/api";

import { usersReducer } from "./usersReducer";
import type { PageStatusData, UserInfo, UsersContextData } from "./types";

import {
  INITIAL_USERS_CONTEXT_VALUE,
  DEFAULT_PAGE_STATUS,
} from "./initialState";
import { DEFAULT_FILTER_VALUE } from "@constants/filterOption";
import { countResultLength } from "@utils/countResultLength";

interface UsersProviderProps {
  initialData: Array<UserInfo>;
  children: ReactNode;
}

export const UsersContext = createContext<UsersContextData>(
  INITIAL_USERS_CONTEXT_VALUE
);

function UsersProvider({ initialData, children }: UsersProviderProps) {
  const [usersData, setUsersData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const [pageStatus, dispatchPageStatus] = useReducer<
    (PageStatusData, usersAction) => PageStatusData
  >(usersReducer, DEFAULT_PAGE_STATUS);

  const handleFetchUsers = async () => {
    try {
      setIsLoading(true);

      const resultLength = countResultLength(
        pageStatus.currentPage,
        PAGE_SIZE,
        TOTAL_DATA
      );

      const { currentPage, keyword, sortBy, sortOrder, filter } = pageStatus;

      const keywordParam = keyword ? `&keyword=${keyword}` : "";

      const filterParam =
        filter.id === DEFAULT_FILTER_VALUE.id ? "" : `&gender=${filter.id}`;

      const sortParam = sortBy
        ? `&sortBy=${sortBy}&sortOrder=${sortOrder}`
        : "";

      const resultParam = `&results=${resultLength}`;
      const queryUrl = `${API_URL}&page=${currentPage}${keywordParam}${filterParam}${sortParam}${resultParam}`;

      const res = await fetch(queryUrl);
      const data = await res.json();

      if (!data) {
        return {
          notFound: true,
        };
      }
      const result = data.results || [];
      setUsersData(result);
    } catch (err) {
      alert("cant fetch data, please try again");
    } finally {
      setIsLoading(false);
    }
  };

  useDebounce(pageStatus, 500, () => {
    handleFetchUsers();
  });

  return (
    <UsersContext.Provider
      value={{ usersData, pageStatus, dispatchPageStatus, isLoading }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
