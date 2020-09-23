import React from "react";
import { render } from "@testing-library/react";
import { TableActions, TableActionsProps as PropTypes } from "../TableActions";

describe("TableActions", () => {
  const TableActionsProps: PropTypes = {
    count: 100,
    page: 0,
    onClick: jest.fn(),
  };

  test("🚀 renders prev and next buttons", () => {
    const { getByText } = render(<TableActions {...TableActionsProps} />);
    const prevButton = getByText(/prev/i);
    const nextButton = getByText(/next/i);

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test("🚀 renders progress", () => {
    const { container } = render(<TableActions {...TableActionsProps} />);
    const progress = container.querySelector(".progress");

    expect(progress).toMatchInlineSnapshot(`
      <span
        class="progress"
      >
        Showing 1 - 10 of 100
      </span>
    `);
  });
});
