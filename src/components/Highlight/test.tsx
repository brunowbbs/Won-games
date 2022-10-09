import { screen } from "@testing-library/react";

import { renderWithTheme } from "../../utils/tests/helpers";

import Highlight from ".";
import { highlightMock } from "../../mocks/highlight";

describe("<Highlight />", () => {
  it("should render headings and button", () => {
    renderWithTheme(<Highlight {...highlightMock} />);

    expect(
      screen.getByRole("heading", { name: /Read Dead it's back/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Come see John's new adventures/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Buy now/i })).toHaveAttribute(
      "href",
      "/rdr2"
    );
  });

  it("should render background image", () => {
    const { container } = renderWithTheme(<Highlight {...highlightMock} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${highlightMock.backgroundImage})`,
    });
  });

  it("should render float image", () => {
    renderWithTheme(<Highlight {...highlightMock} />);

    expect(
      screen.getByRole("img", { name: highlightMock.title })
    ).toHaveAttribute("src", "/img/red-dead-float.png");
  });
});
