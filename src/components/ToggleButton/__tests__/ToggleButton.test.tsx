import { fireEvent } from "@testing-library/react";
import { render } from "../../../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import ToggleButton from "..";

describe("ToggleButton", () => {
  test("it renders with initial state", () => {
    const { getByText } = render(<ToggleButton initialIsOn={false} />);

    expect(getByText("Light Mode")).toBeInTheDocument();
  });

  test("it toggles the state when clicked", () => {
    const { getByText } = render(<ToggleButton initialIsOn={false} />);
    const button = getByText("Light Mode");

    fireEvent.click(button);

    expect(getByText("Dark Mode")).toBeInTheDocument();
  });

  test("it calls the onToggle prop when clicked", () => {
    const onToggle = jest.fn();
    const { getByText } = render(
      <ToggleButton initialIsOn={false} onToggle={onToggle} />
    );
    const button = getByText("Light Mode");

    fireEvent.click(button);

    expect(onToggle).toHaveBeenCalledWith(true);
  });
});
