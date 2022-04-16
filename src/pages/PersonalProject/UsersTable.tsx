import dayjs from "dayjs";
import TableHeader from "@components/Tables/Header";
import { COLUMN_CONFIG } from "@constants/tableConfig";
import { UserInfo } from "@context/users/types";
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
          const nameData = user.name;

          return (
            <tr key={loginData.uuid}>
              <td>{loginData.username}</td>
              <td>{`${nameData.first} ${nameData.last}`}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{dayjs(user.registered.date).format("DD-MM-YYYY HH:mm")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UsersTable;
