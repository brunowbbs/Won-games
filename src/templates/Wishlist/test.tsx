import "../../../.jest/match-media-mock";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import { WishListTemplateProps } from "./types";
import { gameCardsMock } from "../../components/GameCardSlider/mock";
import { highlightMock } from "../../components/Highlight/mock";

import Wishlist from ".";

const props: WishListTemplateProps = {
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
    renderWithTheme(<Wishlist {...props} />);

    expect(screen.getByTestId("Mock ShowCase")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Wishlist" })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
  });

  it("should render empty when there are no games", () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gameCardsMock}
        recommendedHighlight={highlightMock}
      />
    );

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /your wishlist is empty/i })
    ).toBeInTheDocument();
  });
});

/*  it("should render empty when there are no games", () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gameCardsMock}
        recommendedHighlight={highlightMock}
      />
    );

    expect(screen.queryByTestId(/population zero/i)).not.toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Your wishlist is empty/i })
    ).toBeInTheDocument();
  });*/
