import { render } from "../../../utils/test-utils";
import { screen } from "@testing-library/react";
import Button from "..";

const TEXT_MOCK = "TEXT_MOCK";

describe("Test Button", () => {
  it("should render", () => {
    render(<Button>{TEXT_MOCK}</Button>);
    expect(screen.getByText(TEXT_MOCK)).toBeDefined();
  });
});
