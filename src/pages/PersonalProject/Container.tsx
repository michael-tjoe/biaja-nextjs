import { useCallback, useContext } from "react";

import { UsersContext } from "@context/users/usersContext";
import EnumAction from "@context/users/usersAction";

import Breadcrumb from "@components/Breadcrumb";
import Search from "@components/Search";
import Select from "@components/Select";
import Button from "@components/Button";
import TableHeader from "@components/Tables/Header";

import { FILTER_OPTIONS } from "@constants/filterOption";
import { styProjectWrapper, styTableWrapper } from "./styles";

function PersonalProject() {
  const { pageStatus, dispatchPageStatus } = useContext(UsersContext);

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

  return (
    <div className={styProjectWrapper}>
      <Breadcrumb />
      <h1>Personal Project</h1>

      <div className="control-bar">
        <Search
          initialValue={pageStatus.keyword}
          onChange={handleChangeKeyword}
        />
        <Select
          onChange={handleChangeFilter}
          value={pageStatus.filter.id}
          options={FILTER_OPTIONS}
        />
        <Button onClick={handleResetFilter}>Reset Filter</Button>
      </div>

      <div className="table-wrapper">
        <table className={styTableWrapper}>
          <thead>
            <tr>
              <th>Username</th>
              <TableHeader />
              <th>Email</th>
              <th>Gender</th>
              <th>Registered Date</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }, (i, v) => {
              return (
                <tr>
                  <td>Jim Green</td>
                  <td>Jim Green</td>
                  <td>Jim Green</td>
                  <td>Jim Green</td>
                  <td>Jim Green</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PersonalProject;
