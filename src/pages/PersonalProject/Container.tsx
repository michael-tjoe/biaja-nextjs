import { useCallback, useContext } from "react";

import { UsersContext } from "@context/users/usersContext";
import EnumAction from "@context/users/usersAction";

import Spinner from "@components/Spinner";
import Breadcrumb from "@components/Breadcrumb";
import Search from "@components/Search";
import Select from "@components/Select";
import Button from "@components/Button";

import { FILTER_OPTIONS } from "@constants/filterOption";
import UsersTable from "./UsersTable";
import { styProjectWrapper } from "./styles";

function PersonalProject() {
  const { pageStatus, dispatchPageStatus, usersData, isLoading } =
    useContext(UsersContext);

  const handleChangeKeyword = useCallback(
    (newKeyword: string) => {
      dispatchPageStatus({
        type: EnumAction.SET_KEYWORD,
        payload: newKeyword,
      });
    },
    [dispatchPageStatus]
  );

  const handleResetFilter = useCallback(() => {
    dispatchPageStatus({ type: EnumAction.RESET });
  }, [dispatchPageStatus]);

  const handleChangeFilter = useCallback(
    (newFilterValue) => {
      dispatchPageStatus({
        type: EnumAction.SET_FILTER,
        payload: newFilterValue,
      });
    },
    [dispatchPageStatus]
  );

  const handleChangeSort = useCallback(
    (sortByValue) => {
      dispatchPageStatus({
        type: EnumAction.SET_SORT_BY,
        payload: sortByValue,
      });
    },
    [dispatchPageStatus]
  );

  return (
    <div className={styProjectWrapper}>
      <Breadcrumb />
      <h1>Personal Project</h1>

      <Spinner spinning={isLoading}>
        <div className="control-bar">
          <Search value={pageStatus.keyword} onChange={handleChangeKeyword} />
          <Select
            onChange={handleChangeFilter}
            value={pageStatus.filter.id}
            options={FILTER_OPTIONS}
          />
          <Button onClick={handleResetFilter}>Reset Filter</Button>
        </div>

        <div className="table-wrapper">
          <UsersTable
            usersData={usersData}
            sortBy={pageStatus.sortBy}
            sortOrder={pageStatus.sortOrder}
            onClikHeader={handleChangeSort}
          />
        </div>
      </Spinner>
    </div>
  );
}

export default PersonalProject;
