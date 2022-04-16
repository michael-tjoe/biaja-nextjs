import { useMemo, memo } from "react";
import { getPager } from "@utils/getPager";
import { styPaginationWrapper } from "./styles";

interface PaginationProps {
  totalData: number;
  currentPage: number;
  pageSize: number;
  onClickPage: (value: number) => void;
}

function Pagination({
  totalData,
  currentPage,
  pageSize,
  onClickPage,
}: PaginationProps) {
  const result = useMemo(() => {
    return getPager(totalData, currentPage, pageSize);
  }, [totalData, currentPage, pageSize]);

  return (
    <ul className={styPaginationWrapper}>
      {result.map((page, index) => {
        const isActive = currentPage === page;

        return (
          <li
            onClick={() => onClickPage(page)}
            {...(isActive && { "data-active": true })}
            key={index}
          >
            {page}
          </li>
        );
      })}
    </ul>
  );
}

export default memo(Pagination);