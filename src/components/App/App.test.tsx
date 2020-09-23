import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  test("🚀 renders main element node", () => {
    const { container } = render(<App />);
    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();
  });

  test("🚀 renders h2 with correct heading text", () => {
    const { container } = render(<App />);
    const heading = container.querySelector("h2");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Book List");
  });
});
