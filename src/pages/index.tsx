import { ChangeEvent, useState, useEffect } from "react";
import useDebounce from "@hooks/useDebounce";

const FETCH_API = "https://randomuser.me/api/";

const enumSortOrder = {
  ASCENDING: "ascending",
  DESCENDING: "descending",
};

export default function Home() {
  const [userData, setUserData] = useState([]);

  const [pageStatus, setPageStatus] = useState(() => {
    return {
      currentPage: 1,
      keyword: "",
      sortBy: "",
      sortOrder: "",
      filterGender: "all",
    };
  });
  const [searchKeyword, setSearchKeyword] = useState(pageStatus.keyword);

  useEffect(() => {
    const handleFetchData = async (url: string) => {
      const res = await fetch(url);
      const data = await res.json();

      if (!data) {
        return {
          notFound: true,
        };
      }
      const result = data.results || [];
      setUserData(result);
    };
    const { currentPage, keyword, sortBy, sortOrder, filterGender } =
      pageStatus;

    const keywordParam = keyword ? `&keyword=${keyword}` : "";
    const filterParam = filterGender === "all" ? "" : `&gender=${filterGender}`;
    const sortParam = sortBy ? `&sortBy=${sortBy}&sortOrder=${sortOrder}` : "";

    const queryUrl = `${FETCH_API}?page=${currentPage}&results=10${keywordParam}${filterParam}${sortParam}`;
    handleFetchData(queryUrl);
  }, [pageStatus]);

  useDebounce(searchKeyword, 500, () => {
    if (pageStatus.keyword !== searchKeyword) {
      setPageStatus({
        ...pageStatus,
        keyword: searchKeyword,
      });
    }
  });

  const handleChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleChangeFilterGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setPageStatus({
      ...pageStatus,
      filterGender: e.target.value,
    });
  };

  const handleChangeSort = (dataIndex: string) => {
    const currentSortBy = pageStatus.sortBy;
    const currentSortOrder = pageStatus.sortOrder;

    if (dataIndex === currentSortBy) {
      if (currentSortOrder === enumSortOrder.ASCENDING) {
        setPageStatus({
          ...pageStatus,
          sortBy: dataIndex,
          sortOrder: enumSortOrder.DESCENDING,
        });
      } else {
        setPageStatus({
          ...pageStatus,
          sortBy: "",
          sortOrder: "",
        });
      }
    } else {
      setPageStatus({
        ...pageStatus,
        sortBy: dataIndex,
        sortOrder: enumSortOrder.ASCENDING,
      });
    }
  };

  return (
    <>
      <div style={{ display: "flex", columnGap: 12 }}>
        <input value={searchKeyword} onChange={handleChangeSearchKeyword} />

        <select
          value={pageStatus.filterGender}
          onChange={handleChangeFilterGender}
        >
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <button>Reset Filter</button>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleChangeSort("username")}>Username</th>
            <th onClick={() => handleChangeSort("name")}>Name</th>
            <th onClick={() => handleChangeSort("email")}>Email</th>
            <th onClick={() => handleChangeSort("gender")}>Gender</th>
            <th onClick={() => handleChangeSort("register_date")}>
              Registered Date
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            const loginData = user.login || {};
            const nameData = user.name || {};

            return (
              <tr key={loginData.uuid}>
                <td>{loginData.username}</td>
                <td>{`${nameData.first} ${nameData.last}`}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.registered.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
