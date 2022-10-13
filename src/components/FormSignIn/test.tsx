import { render, screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import FormSignIn from ".";

describe("<FormSignIn/>", () => {
  it("Should render the form", () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    //Verificar password
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    //Verificar button

    expect(
      screen.getByRole("button", { name: /sign in now/i })
    ).toBeInTheDocument();
  });

  it("Should render the forgot password link", () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByRole("link", { name: /forgot your password\?/i }));
  });

  it("Should render the text to sign up", () => {
    renderWithTheme(<FormSignIn />);
    //Verificar o text
    expect(screen.getByText(/don't have an account/i)).toBeInTheDocument();
    //Verificar o link
    expect(screen.getByRole("link", { name: /sign up/i })).toBeInTheDocument();
  });
});
