import React from "react";

import { Header, TableContainer, Search } from "../";

export const App = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isFetching, setIsFetching] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const handleSearchInputChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    setSearchQuery(e.currentTarget.value);
    setPage(0);
  };

  return (
    <>
      <Header />

      <main>
        <Search
          isFetching={isFetching}
          onChange={handleSearchInputChange}
          value={searchQuery}
        />

        <h2 className="sr-only">Book List</h2>
        <TableContainer
          page={page}
          setPage={setPage}
          searchQuery={searchQuery}
          isFetchingCallback={setIsFetching}
        />
      </main>
    </>
  );
};
