import { render } from "../../../utils/test-utils";
import { screen } from "@testing-library/react";
import Header from "..";

describe("Header", () => {
  it("should render", () => {
    render(<Header />);
    expect(screen.getByText("REACT"));
    expect(screen.getByText("JS"));
  });
});
