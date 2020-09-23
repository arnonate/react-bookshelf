import React from "react";

import { Header, TableContainer, Search } from "../";

export const App = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isFetching, setIsFetching] = React.useState(false);

  const handleSearchInputChange = (e: React.FormEvent<HTMLInputElement>) =>
    setSearchQuery(e.currentTarget.value);

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
          searchQuery={searchQuery}
          isFetchingCallback={setIsFetching}
        />
      </main>
    </>
  );
};
