import "../../../.jest/match-media-mock";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import Home from ".";

import { bannersMock } from "../../components/Banner/mock";
import { gameCardsMock } from "../../components/GameCard/mock";
import { highlightMock } from "../../components/Highlight/mock";

const props = {
  banners: bannersMock,
  newGames: [gameCardsMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gameCardsMock[0]],
  upCommingGames: [gameCardsMock[0]],
  upCommingMoreGames: [gameCardsMock[0]],
  upCommingHighlight: highlightMock,
  freeGames: [gameCardsMock[0]],
  freeHighlight: highlightMock,
};

describe("<Home/>", () => {
  it("Should render menu and footer", () => {
    renderWithTheme(<Home {...props} />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();
  });

  it("Should render sections", () => {
    renderWithTheme(<Home {...props} />);
    expect(screen.getByRole("heading", { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /most popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Upcomming/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /free games/i })
    ).toBeInTheDocument();
  });

  it("Should render section elements", () => {
    renderWithTheme(<Home {...props} />);
    //banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);

    //card game (5 sections com 4 cards cada 5 * 4 )
    //expect(screen.getAllByAltText(/population zero/)).toHaveLength(20);
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);

    //highlight (5 sections com 4 cards cada 5 * 4 )
    //expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3);
  });
});
