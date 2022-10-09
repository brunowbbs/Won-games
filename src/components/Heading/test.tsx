import { render, screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import "jest-styled-components";

import Heading from ".";

describe("<Heading/>", () => {
  it("Should render a white heading by default", () => {
    renderWithTheme(<Heading>Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      color: "#FAFAFA",
    });
  });

  it("Should render a black heading when color is passed", () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      color: "#030517",
    });
  });

  it("Should render a heading with a line to the left side", () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "border-left": "0.7rem solid #F231A5",
    });
  });

  it("Should render a heading with a line at the bottom", () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "border-bottom",
      "0.5rem solid #F231A5",
      {
        modifier: "::after",
      }
    );
  });

  it("Should render a heading with a small size", () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "font-size",
      "1.6rem"
    );

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "width",
      "3rem",
      {
        modifier: "::after",
      }
    );
  });

  it("Should render a Heading with a secondary line color", () => {
    renderWithTheme(
      <Heading lineLeft lineBottom lineColor="secondary">
        Lorem ipsum
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /lorem ipsum/i });
    expect(heading).toHaveStyle({ "border-left": "0.7rem solid #3CD3C1" });
    expect(heading).toHaveStyleRule("border-bottom", "0.5rem solid #3CD3C1", {
      modifier: "::after",
    });
  });
});
