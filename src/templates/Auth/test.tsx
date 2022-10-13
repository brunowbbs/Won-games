import { render, screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import Auth from ".";

describe("<Auth/>", () => {
  it("Should render logos, title, subtitle and children", () => {
    const { container } = renderWithTheme(
      <Auth title="Teste Auth">
        <input type="text" />
      </Auth>
    );

    //Verificar se tem 2 logos
    expect(screen.getAllByRole("img", { name: /Won Games/i })).toHaveLength(2);
    //Verificar sem tem o heading principal do banner
    expect(
      screen.getByRole("heading", {
        name: /All your favorite games in on place/i,
      })
    ).toBeInTheDocument();
    //Verificar se tem o subtitle
    expect(
      screen.getByRole("heading", {
        name: /WON is the best and most complete gamming platform/i,
      })
    ).toBeInTheDocument();
    //Verificar se tem o title do content
    expect(
      screen.getByRole("heading", {
        name: /Teste Auth/i,
      })
    ).toBeInTheDocument();
    //Verificar se o children tá sendo renderizado
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
