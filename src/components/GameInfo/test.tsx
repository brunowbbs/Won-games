import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import GameInfo from ".";

const props = {
  title: "My game title",
  description: "Game description",
  price: "R$ 210,00",
};

describe("<GameInfo/>", () => {
  it("Should render game informations", () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole("heading", { name: /my game title/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/game description/i)).toBeInTheDocument();

    expect(screen.getByText(/\R$210,00/i)).toBeInTheDocument();
  });

  it("Should render buttons", () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /wishlist/i })
    ).toBeInTheDocument();
  });
});
