import React from "react";
import ReactDOM from "react-dom";

import { Book } from "../../hooks/useBooks";

type ModalProps = {
  isVisible: boolean;
  toggleVisibility: () => void;
  book: Partial<Book>;
};

export const Modal = ({
  isVisible,
  toggleVisibility,
  book,
}: Readonly<ModalProps>): JSX.Element | null => {
  const modal = (
    <>
      <div className="backdrop" onClick={toggleVisibility} />
      <div className="modal" aria-modal aria-label="Book Details" role="dialog">
        {book.volumeInfo?.imageLinks?.thumbnail ? (
          <img
            className="modal-image"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        ) : null}

        {book.volumeInfo?.title ? <h2>{book.volumeInfo.title}</h2> : null}

        {book.volumeInfo?.subtitle ? <h3>{book.volumeInfo.subtitle}</h3> : null}

        <p>
          {book.volumeInfo?.publishedDate ? (
            <>
              <b>{book.volumeInfo.publishedDate}</b>
              <br />
            </>
          ) : null}

          {book.volumeInfo?.authors ? (
            <>
              <i>{book.volumeInfo.authors[0]}</i>
              <br />
            </>
          ) : null}

          {book.volumeInfo?.pageCount ? (
            <>
              Pages: {book.volumeInfo.pageCount}
              <br />
            </>
          ) : null}
        </p>

        {book.saleInfo?.buyLink ? (
          <>
            <a
              href={book.saleInfo.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Purchase
            </a>
            <br />
          </>
        ) : null}

        <span
          className="modal-close"
          aria-label="Close Book Details"
          onClick={toggleVisibility}
        >
          &times;
        </span>
      </div>
    </>
  );

  return isVisible ? ReactDOM.createPortal(modal, document.body) : null;
};
