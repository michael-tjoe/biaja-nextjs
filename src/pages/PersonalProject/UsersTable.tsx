import { memo } from "react";

import TableHeader from "@components/Tables/Header";
import { UserInfo } from "@context/users/types";
import { COLUMN_CONFIG } from "@constants/tableConfig";

import { styTableWrapper } from "./styles";

interface UsersTableProps {
  usersData: Array<UserInfo>;
  sortBy: string;
  sortOrder: string;
  onClikHeader: (value: string) => void;
}

function UsersTable({
  usersData,
  sortBy,
  sortOrder,
  onClikHeader,
}: UsersTableProps) {
  const handleClickTableHeader = (value: string) => {
    onClikHeader(value);
  };

  return (
    <table className={styTableWrapper}>
      <thead>
        <tr>
          {COLUMN_CONFIG.map((config) => (
            <TableHeader
              key={config.key}
              id={config.key}
              title={config.title}
              sortBy={sortBy}
              sortOrder={sortOrder}
              onClick={handleClickTableHeader}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {usersData.map((user) => {
          const loginData = user.login || { uuid: "", username: "" };
          const uuid = loginData.uuid;

          return (
            <tr key={uuid}>
              {COLUMN_CONFIG.map((column) => {
                const isActiveSort = column.key === sortBy;
                return (
                  <td
                    key={`${column.key}-${uuid}`}
                    className={isActiveSort ? "active" : ""}
                  >
                    {column.dataIndex(user)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default memo(UsersTable);
