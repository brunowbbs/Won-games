import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import PaymentOptions from ".";
import { paymentOptionsMock } from "./mock";
import userEvent from "@testing-library/user-event";

describe("<PaymentoOptions/>", () => {
  it("should render the saved card options and the add new card button", () => {
    renderWithTheme(
      <PaymentOptions cards={paymentOptionsMock} handlePayment={jest.fn} />
    );

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument();
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument();
  });

  it("should handle select card when clicking on the label", async () => {
    renderWithTheme(
      <PaymentOptions cards={paymentOptionsMock} handlePayment={jest.fn} />
    );

    userEvent.click(screen.getByLabelText(/4325/));

    await waitFor(() => {
      expect(screen.getByRole("radio", { name: /4325/ })).toBeChecked();
    });
  });

  it("should not call handle payment when button is disabled", async () => {
    const handlePayment = jest.fn();

    renderWithTheme(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePayment}
      />
    );

    userEvent.click(screen.getByRole("button", { name: /buy now/i }));

    expect(handlePayment).not.toHaveBeenCalled();
  });

  it("should call handle payment when credit card is selected", async () => {
    const handlePayment = jest.fn();

    renderWithTheme(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePayment}
      />
    );

    userEvent.click(screen.getByLabelText(/4325/));
    userEvent.click(screen.getByRole("button", { name: /buy now/i }));

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled();
    });
  });
});
