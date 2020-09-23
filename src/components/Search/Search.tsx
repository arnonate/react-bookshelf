import React from "react";

type SearchProps = {
  isFetching: boolean;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const Search = ({
  isFetching,
  value,
  onChange,
}: Readonly<SearchProps>): JSX.Element => {
  return (
    <form className="search">
      <div role="search">
        <label className="sr-only" htmlFor="book-search">
          Search books
        </label>

        <span className="search-icon">
          {isFetching ? (
            <span role="img" aria-label="Fetching Icon">
              ⏳
            </span>
          ) : (
            <span role="img" aria-label="Search Icon">
              🔍
            </span>
          )}
        </span>

        <input
          id="book-search"
          placeholder="Search books..."
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </form>
  );
};
