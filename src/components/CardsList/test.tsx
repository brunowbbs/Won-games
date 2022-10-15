import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import CardsList from ".";
import { paymentOptionsMock } from "../PaymentOptions/mock";

describe("<CardsList/>", () => {
  it("should render the cards list", () => {
    renderWithTheme(<CardsList cards={paymentOptionsMock} />);

    expect(
      screen.getByRole("heading", { name: /cards list/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("img", { name: /visa/i })).toHaveAttribute(
      "src",
      "/img/visa.png"
    );

    expect(screen.getByRole("img", { name: /mastercard/i })).toHaveAttribute(
      "src",
      "/img/master-card.png"
    );

    expect(screen.getByText(/4325/i)).toBeInTheDocument();
    expect(screen.getByText(/4326/i)).toBeInTheDocument();
  });
});
