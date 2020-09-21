import { useQuery } from "react-query";
import axios from "axios";

export type VolumeInfo = {
  authors: string[];
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  pageCount: number;
  publishedDate: string;
  subtitle: string;
  title: string;
};

export type Book = {
  id: number;
  volumeInfo: VolumeInfo;
};

export type BookResponse = {
  kind: "books#volumes";
  items?: Book[];
  totalItems: number;
};

const getBooks = async (
  _: string, // TODO: Figure out what this arg is
  searchQuery: string,
  page: number
): Promise<BookResponse> => {
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      searchQuery
    )}&fields=kind,items(id,volumeInfo(authors,imageLinks,pageCount,publishedDate,subtitle,title)),totalItems&startIndex=${page}`
  );

  return data;
};

export default function useBooks(searchQuery: string, page: number) {
  return useQuery<BookResponse, Error>(["books", searchQuery, page], getBooks, {
    enabled: searchQuery, // If we have searchQuery, enable the query on render
  });
}
