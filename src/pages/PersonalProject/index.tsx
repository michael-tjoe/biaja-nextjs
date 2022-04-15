import { useEffect, useState, useRef } from "react";

import Breadcrumb from "@components/Breadcrumb";
import Search from "@components/Search";
import Select from "@components/Select";
import Button from "@components/Button";
import TableHeader from "@components/Tables/Header";

import { DEFAULT_FILTER_VALUE, FILTER_OPTIONS } from "@constants/filterOption";
import { styProjectWrapper, styTableWrapper } from "./styles";
import type { PersonalProjectProps } from "./types";

function PersonalProject({ initialData }: PersonalProjectProps) {
  const hasMounted = useRef(false);

  const [userData, setUserData] = useState(initialData);
  const [pageStatus, setPageStatus] = useState(() => {
    return {
      currentPage: 1,
      keyword: "",
      sortBy: "",
      sortOrder: "",
      filterGender: DEFAULT_FILTER_VALUE,
    };
  });

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    console.log("pageStatus: ", pageStatus);
  }, [pageStatus]);

  const handleChangeKeyword = (newKeyword: string) => {
    setPageStatus({
      ...pageStatus,
      keyword: newKeyword,
    });
  };

  const handleResetFilter = () => {
    setPageStatus({
      ...pageStatus,
      currentPage: 1,
      keyword: "",
      filterGender: DEFAULT_FILTER_VALUE,
    });
  };

  return (
    <div className={styProjectWrapper}>
      <Breadcrumb />
      <h1>Personal Project</h1>

      <div className="control-bar">
        <Search
          initialValue={pageStatus.keyword}
          onChange={handleChangeKeyword}
        />
        <Select />
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
