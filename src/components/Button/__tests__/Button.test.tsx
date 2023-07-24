import { render } from "../../../utils/test-utils";
import Button from "..";

describe("Test Button", () => {
  it("teste render", () => {
    render(<Button>Teste</Button>);
    expect(1).toBe(1);
  });
});
