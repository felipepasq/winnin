import { render } from "../../../utils/test-utils";
import { screen } from "@testing-library/react";
import PostList from "..";

const POSTS_MOCK = [
  {
    kind: "KIND_MOCK",
    data: {
      id: "ID_MOCK",
      title: "TITLE_MOCK",
      created_utc: Date.now(),
      author: "AUTHOR_MOCK",
      url: "URL_MOCK",
    },
  },
  {
    kind: "KIND_MOCK_SECOND",
    data: {
      id: "ID_MOCK_SECOND",
      title: "TITLE_MOCK_SECOND",
      created_utc: Date.now(),
      author: "AUTHOR_MOCK_SECOND",
      url: "URL_MOCK_SECOND",
    },
  },
];

describe("Post List", () => {
  it("should render skeleton when loading", () => {
    render(<PostList posts={POSTS_MOCK} isLoading={true} />);
    const skeleton = screen.getAllByTestId("post-skeleton");
    expect(skeleton).toBeDefined();
  });
  it("should renders loading state correctly", () => {
    render(<PostList posts={[]} isLoading={true} />);
    const skeletonElements = screen.getAllByTestId("post-skeleton");
    expect(skeletonElements).toHaveLength(10);
  });
  it("should render 'Nenhum post encontrado' when there are no posts", () => {
    render(<PostList posts={[]} isLoading={false} />);
    expect(screen.getByText("Nenhum post encontrado")).toBeInTheDocument();
  });

  test("renders posts correctly", () => {
    render(<PostList posts={POSTS_MOCK} isLoading={false} />);

    POSTS_MOCK.forEach((post) => {
      expect(screen.getByText(post.data.title)).toBeInTheDocument();
    });
  });
});
