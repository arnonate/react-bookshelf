import React from "react";

import { SortType } from "./TableContainer";
import { Book } from "../../hooks/useBooks";

type TableComponentProps = {
  data?: Book[];
  error?: false | Error | null;
  loading: boolean;
  setSortBy: (key: SortType) => void;
  sortBy: SortType;
};

export const TableComponent = ({
  data = [],
  error = null,
  loading,
  setSortBy,
  sortBy,
}: Readonly<TableComponentProps>) => {
  data.sort((a: Book, b: Book): number => {
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
        (a.volumeInfo["pageCount"] ?? Number.MAX_SAFE_INTEGER) -
        (b.volumeInfo["pageCount"] ?? Number.MAX_SAFE_INTEGER)
      ); // Place empty pageCount at end of list
    }
    if (sortBy === "date") {
      console.log(new Date(a.volumeInfo.publishedDate).getUTCSeconds());
      return (a.volumeInfo.publishedDate
        ? new Date(a.volumeInfo.publishedDate).toISOString()
        : new Date().toISOString()
      ).localeCompare(
        b.volumeInfo.publishedDate
          ? new Date(b.volumeInfo.publishedDate).toISOString()
          : new Date().toISOString()
      ); // Place empty publishedDate at end of list
    }
    return a.volumeInfo["title"].localeCompare(b.volumeInfo["title"]);
  });

  return (
    <div className="table-container">
      <table>
        <caption className="sr-only">Books Table</caption>
        <thead>
          <tr>
            <th scope="col" onClick={() => setSortBy("title")}>
              Title {sortBy === "title" ? <span>*</span> : null}
            </th>
            <th scope="col" onClick={() => setSortBy("author")}>
              Author {sortBy === "author" ? <span>*</span> : null}
            </th>
            <th scope="col" onClick={() => setSortBy("date")}>
              Published {sortBy === "date" ? <span>*</span> : null}
            </th>
            <th scope="col" onClick={() => setSortBy("pages")}>
              Pages {sortBy === "pages" ? <span>*</span> : null}
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((book: Book, ind: number) => (
              <tr key={book.id + ind} tabIndex={0}>
                <td>{book.volumeInfo.title ?? "---"}</td>
                <td>
                  {book.volumeInfo.authors ? book.volumeInfo.authors[0] : "---"}
                </td>
                <td>
                  {book.volumeInfo.publishedDate
                    ? new Date(
                        book.volumeInfo.publishedDate
                      ).toLocaleDateString()
                    : "---"}
                </td>
                <td>{book.volumeInfo.pageCount ?? "---"}</td>
              </tr>
            ))
          ) : loading ? (
            <tr>
              <td colSpan={4}>{"Loading books..."}</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan={4}>
                {error.message ?? "There was an error with your search."}
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan={4}>{"No books found, maybe refine your search?"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
