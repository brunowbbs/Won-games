import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import OrdersList from ".";
import React from "react";
import { orderListMock } from "./mock";

jest.mock("../../components/GameItem", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>;
  },
}));

jest.mock("../../components/Empty", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));

describe("<OrdersList/>", () => {
  it("should render the orders list", () => {
    const {} = renderWithTheme(<OrdersList items={orderListMock} />);

    expect(screen.getByRole("heading", { name: /my orders/i }));
    expect(screen.getAllByTestId("Mock GameItem")).toHaveLength(2);
    expect(screen.queryByTestId("Mock Empty")).not.toBeInTheDocument();
  });

  it("should render empty state", () => {
    renderWithTheme(<OrdersList />);

    expect(screen.getByTestId("Mock Empty")).toBeInTheDocument();
  });
});
