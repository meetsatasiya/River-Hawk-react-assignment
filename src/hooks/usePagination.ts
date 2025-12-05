import { useState, useMemo } from "react";

export function usePagination<T>(data: T[], rowsPerPage = 5) {
  const [page, setPage] = useState(0);

  const paginatedData = useMemo(() => {
    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [data, page, rowsPerPage]);

  return {
    page,
    rowsPerPage,
    paginatedData,
    setPage,
    total: data.length,
  };
}
