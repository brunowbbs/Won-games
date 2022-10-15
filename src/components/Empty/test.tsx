import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import Empty from ".";
import { EmptyProps } from "./type";

const props: EmptyProps = {
  title: "A simple title",
  description: "A simple description",
};

describe("<Empty/>", () => {
  it("Should render correctly", () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />);
    expect(
      screen.getByRole("img", {
        name: /a gammer in a couch playing videogame/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /a simple title/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /go back to store/i })
    ).toHaveAttribute("href", "/");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should not render link when haslink is not passed", () => {
    renderWithTheme(<Empty {...props} />);

    expect(
      screen.queryByRole("link", { name: /go back to store/i })
    ).not.toBeInTheDocument();
  });
});
