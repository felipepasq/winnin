/* eslint-disable @typescript-eslint/no-explicit-any */
import { screen } from "@testing-library/react";
import { render } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import Home from "..";

describe("Home", () => {
  beforeEach(() => {
    (fetch as any).resetMocks();
  });

  it("renders without crashing", async () => {
    (fetch as any).mockResponseOnce(
      JSON.stringify({ data: { children: [], after: "" } })
    );
    render(<Home />);
    expect(screen.getByText("Hot")).toBeInTheDocument();
  });
  it("renders the post type buttons", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Hot")).toBeInTheDocument();
    expect(getByText("News")).toBeInTheDocument();
    expect(getByText("Rising")).toBeInTheDocument();
  });
});
