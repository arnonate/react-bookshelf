import React from "react";

type TableActions = {
  count: number;
  page: number;
  onClick: (arg: number) => void;
};

export const TableActions = ({
  count,
  page,
  onClick,
}: Readonly<TableActions>) => (
  <div className="table-actions">
    <button
      disabled={count === 0 || page === 0}
      onClick={() => onClick(page - 1)}
    >
      <span role="img" aria-label="Show Previous">
        👈
      </span>
      <span> Previous</span>
    </button>

    <span>
      {count > 0 // TODO: Figure out why totalItems is different on every fetch
        ? `Showing ${page === 0 ? 1 : page * 10} - ${
            (page + 1) * 10
          } of ${count}`
        : null}
    </span>

    <button
      disabled={count === 0 || count / page <= 10}
      onClick={() => onClick(page + 1)}
    >
      <span>Next </span>
      <span role="img" aria-label="Show Next">
        👉
      </span>
    </button>
  </div>
);
