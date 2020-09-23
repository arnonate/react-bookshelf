import React from "react";
// import { ReactQueryDevtools } from "react-query-devtools";

import { TableComponent } from "./TableComponent";
import useDebounce from "../../hooks/useDebounce";
import useBooks from "../../hooks/useBooks";
import { TableActions } from "./TableActions";

export type SortType = "author" | "pages" | "title" | "date";

export type TableContainerProps = {
  searchQuery: string;
  isFetchingCallback: (key: boolean) => void;
  page: number;
  setPage: (key: number) => void;
};

export const TableContainer = ({
  searchQuery,
  isFetchingCallback,
  page,
  setPage,
}: Readonly<TableContainerProps>): JSX.Element => {
  const [sortBy, setSortBy] = React.useState<SortType>("title");
  const debouncedSearchQuery = useDebounce(searchQuery, 600);
  const { status, data, error, isFetching } = useBooks(
    debouncedSearchQuery,
    page * 10 // useBooks default query returns 10 results
  );

  React.useEffect(() => isFetchingCallback(isFetching), [
    isFetching,
    isFetchingCallback,
  ]);

  let books = data?.items ?? [];
  let count = data?.totalItems ?? 0;

  return (
    <>
      <p>* Sort Column</p>
      <TableComponent
        data={books}
        loading={isFetching}
        sortBy={sortBy}
        setSortBy={setSortBy}
        error={status === "error" && error}
      />
      <TableActions count={count} page={page} onClick={setPage} />
      {/* <ReactQueryDevtools /> */}
    </>
  );
};
