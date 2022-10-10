import { screen } from "@testing-library/react";
import "jest-styled-components";

import { renderWithTheme } from "../../utils/tests/helpers";
import { highlightMock } from "./mock";

import * as S from "./styles";

import Highlight from ".";

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

  it("should render align right by default", () => {
    const { container } = renderWithTheme(<Highlight {...highlightMock} />);

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      /floatimage content/i
    );

    expect(container.firstChild).toHaveStyleRule("text-align", "right", {
      modifier: `${S.Content}`,
    });
  });

  it("should render align left by default", () => {
    const { container } = renderWithTheme(
      <Highlight {...highlightMock} alignment="left" />
    );

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      /content floatimage/i
    );

    expect(container.firstChild).toHaveStyleRule("text-align", "left", {
      modifier: `${S.Content}`,
    });
  });
});
