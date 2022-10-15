import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import { cartListMock } from "../../components/CarList/mock";
import { gameCardsMock } from "../../components/GameCard/mock";
import { highlightMock } from "../../components/Highlight/mock";
import { paymentOptionsMock } from "../../components/PaymentOptions/mock";
import CartTemplate from ".";

const props = {
  items: cartListMock,
  total: "R$ 430,00",
  cards: paymentOptionsMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gameCardsMock,
};

jest.mock("../Base", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock("../../components/Showcase", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

jest.mock("../../components/CarList", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Cart" />;
  },
}));

jest.mock("../../components/PaymentOptions", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentOptions" />;
  },
}));

jest.mock("../../components/Empty", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));

describe("<Cart/>", () => {
  it("Should render sections", () => {
    renderWithTheme(<CartTemplate {...props} />);

    expect(
      screen.getByRole("heading", { name: /my cart/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("Mock Cart")).toBeInTheDocument();
    expect(screen.getByTestId("Mock PaymentOptions")).toBeInTheDocument();
    expect(screen.getByTestId("Mock Showcase")).toBeInTheDocument();
    expect(screen.queryByTestId("Mock Empty")).not.toBeInTheDocument();
  });

  it("should render empty section if there are no items", () => {
    renderWithTheme(<CartTemplate {...props} items={[]} />);
    expect(screen.queryByTestId("Mock Empty")).toBeInTheDocument();
  });
});
