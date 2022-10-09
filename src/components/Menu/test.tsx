import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import Menu from ".";

describe("<Menu/>", () => {
  it("Should render the menu", () => {
    const { container } = renderWithTheme(<Menu />);
    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Won Games/i })).toBeInTheDocument();
  });

  it("Should render open/close mobile menu", () => {
    renderWithTheme(<Menu />);
    //selecionar menuFull
    const fullMenuElement = screen.getByRole("navigation", { hidden: true });

    //Verificar se menu ta escondido
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    //Clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("false");
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    //Clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute("aria-hidden")).toBe("true");
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it("Should show register box when logged out", () => {
    renderWithTheme(<Menu />);
    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/log in now/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/sign up/i)[0]).toBeInTheDocument();
  });

  it("Should show whishlist and account when logged in", () => {
    renderWithTheme(<Menu userName="will" />);

    expect(screen.getAllByText(/my account/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/wishlist/i)[0]).toBeInTheDocument();
    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });
});
