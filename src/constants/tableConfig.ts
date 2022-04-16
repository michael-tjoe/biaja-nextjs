import dayjs from "dayjs";

export const EnumSortOrder = {
  ASCENDING: "ascending",
  DESCENDING: "descending",
};

export const COLUMN_CONFIG = [
  {
    title: "Username",
    key: "username",
    dataIndex: (value) => {
      return value?.login?.username || "";
    },
  },
  {
    title: "Name",
    key: "name",
    dataIndex: (value) => {
      const nameData = value.name;
      return `${nameData.first} ${nameData.last}`;
    },
  },
  {
    title: "Email",
    key: "email",
    dataIndex: (value) => {
      return value?.email || "";
    },
  },
  {
    title: "Gender",
    key: "gender",
    dataIndex: (value) => {
      return value?.gender || "";
    },
  },
  {
    title: "Registered Date",
    key: "registered_date",
    dataIndex: (value) => {
      return dayjs(value?.registered?.date || "").format("DD-MM-YYYY HH:mm");
    },
  },
];
