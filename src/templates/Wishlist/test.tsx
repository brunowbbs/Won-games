import "../../../.jest/match-media-mock";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import { WishListTemplateProps } from "./types";
import { gameCardsMock } from "../../components/GameCardSlider/mock";
import { highlightMock } from "../../components/Highlight/mock";

import Wishlist from ".";

const props:WishListTemplateProps = {
  games: gameCardsMock,
  recommendedGames: gameCardsMock,
  recommendedHighlight: highlightMock,
};

jest.mock("../../components/ShowCase", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ShowCase" />;
  },
}));

describe("<Wishlist/>", () => {
  it("should render correctly", () => {
    const { debug, container } = renderWithTheme(<Wishlist {...props} />);

    expect(screen.getByTestId("Mock ShowCase")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /wishlist/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
  });
});
