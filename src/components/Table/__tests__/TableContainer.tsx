import React from "react";
import { render } from "@testing-library/react";
import { TableContainer } from "../TableContainer";

describe("TableContainer", () => {
  const TableContainerProps = {
    searchQuery: "React",
    isFetchingCallback: jest.fn(),
  };

  test("🚀 renders help text", () => {
    const { getByText } = render(<TableContainer {...TableContainerProps} />);
    const helpText = getByText(/sort column/i);

    expect(helpText).toBeInTheDocument();
  });
});
