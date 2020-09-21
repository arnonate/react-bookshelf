import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";

import { TableComponent } from "./TableComponent";
import useDebounce from "../../hooks/useDebounce";
import useBooks, { Book } from "../../hooks/useBooks";
import { TableActions } from "./TableActions";

type TableContainerProps = {
  searchQuery: string;
  isFetchingCallback: (isFetching: boolean) => void;
};

export const TableContainer = ({
  searchQuery,
  isFetchingCallback,
}: Readonly<TableContainerProps>) => {
  const [page, setPage] = React.useState(0);
  const [sortBy, setSortBy] = React.useState<"author" | "pages" | "title">(
    "title"
  );
  const debouncedSearchQuery = useDebounce(searchQuery, 600);
  const { status, data, error, isFetching } = useBooks(
    debouncedSearchQuery,
    page * 10 // useBooks default query returns 10 results
  );

  React.useEffect(() => isFetchingCallback(isFetching), [
    isFetching,
    isFetchingCallback,
  ]);

  const sortBooks = (a: Book, b: Book): number => {
    if (sortBy === "author") {
      return (a.volumeInfo["authors"]
        ? a.volumeInfo["authors"][0]
        : "ZZZ"
      ).localeCompare(
        b.volumeInfo["authors"] ? b.volumeInfo["authors"][0] : "ZZZ"
      ); // Place empty authors at end of list
    }
    if (sortBy === "pages") {
      return (
        (a.volumeInfo["pageCount"] ?? 9999) -
        (b.volumeInfo["pageCount"] ?? 9999)
      ); // Place empty pageCount at end of list
    }
    return a.volumeInfo["title"].localeCompare(b.volumeInfo["title"]);
  };

  let count = data?.totalItems ?? 0;
  let books = data?.items ?? [];
  let sortedBooks = books.sort(sortBooks);

  return (
    <>
      <TableComponent
        data={sortedBooks}
        loading={isFetching}
        sortBy={setSortBy}
        error={status === "error" && error}
      />
      <TableActions count={count} page={page} onClick={setPage} />
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};
