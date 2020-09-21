import React from "react";

import { Book } from "../../hooks/useBooks";

type TableComponentProps = {
  data?: Book[];
  error?: false | Error | null;
  loading: boolean;
  sortBy: (key: "title" | "author" | "pages") => void;
};

export const TableComponent = ({
  data = [],
  error = null,
  loading,
  sortBy,
}: Readonly<TableComponentProps>) => {
  return (
    <div className="table-container">
      <table>
        <caption className="sr-only">Books Table</caption>
        <thead>
          <tr>
            <th scope="col" onClick={() => sortBy("title")}>
              Title
            </th>
            <th scope="col" onClick={() => sortBy("author")}>
              Author
            </th>
            <th scope="col" onClick={() => sortBy("pages")}>
              Page Count
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((book: Book, ind: number) => (
              <tr key={book.id + ind}>
                <td>{book.volumeInfo.title ?? "---"}</td>
                <td>
                  {book.volumeInfo.authors ? book.volumeInfo.authors[0] : "---"}
                </td>
                <td>{book.volumeInfo.pageCount ?? "---"}</td>
              </tr>
            ))
          ) : loading ? (
            <tr>
              <td colSpan={3}>{"Loading books..."}</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan={3}>
                {error.message ?? "There was an error with your search."}
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan={3}>{"No books found, maybe refine your search?"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
