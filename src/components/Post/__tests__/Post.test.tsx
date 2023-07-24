import { render } from "../../../utils/test-utils";
import { screen } from "@testing-library/react";

import Post from "..";

const POST_MOCK = {
  kind: "KIND_MOCK",
  data: {
    id: "ID_MOCK",
    title: "TITLE_MOCK",
    created_utc: Date.now(),
    author: "AUTHOR_MOCK",
    url: "URL_MOCK",
  },
};

describe("Post", () => {
  it("renders without crashing", () => {
    render(<Post post={POST_MOCK} />);
    expect(screen.getByText(POST_MOCK.data.title)).toBeInTheDocument();
  });

  it("displays the correct author and URL", () => {
    render(<Post post={POST_MOCK} />);

    const authorLink = screen.getByText(POST_MOCK.data.author);
    expect(authorLink).toBeInTheDocument();
    expect(authorLink).toHaveAttribute(
      "href",
      `https://www.reddit.com/user/${POST_MOCK.data.author}/`
    );

    const urlLink = screen.getByText(POST_MOCK.data.url);
    expect(urlLink).toBeInTheDocument();
    expect(urlLink).toHaveAttribute("href", POST_MOCK.data.url);
  });
});
