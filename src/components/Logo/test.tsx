import { render, screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import "jest-styled-components";

import Logo from ".";

//renderizar o componente 'render'
//selecionar o elemento a ser testado 'screen' (queries) - getByLabel, ...
//expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)

describe("</Logo>", () => {
  it("Should render the logo with id passed", () => {
    const { container } = renderWithTheme(<Logo id="myId" />);

    expect(container.querySelector("#paint_linear_myId")).toBeInTheDocument();
  });

  it("Should render a white label by defult", () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: "#FAFAFA",
    });
  });

  it("Should render a black label when color is passed", () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: "#030517",
    });
  });

  it("Should render a normal logo when size is default", () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: "11rem",
    });
  });

  it("Should render a bigger logo", () => {
    renderWithTheme(<Logo color="black" size="large" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: "20rem",
    });
  });

  it("Should render a bigger logo without text if hideOnMobile", () => {
    renderWithTheme(<Logo hideOnMobile />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      "width",
      "5.8rem",
      {
        media: "(max-width: 768px)",
      }
    );
  });
});
