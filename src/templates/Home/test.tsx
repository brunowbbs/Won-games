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

jest.mock("../../components/ShowCase", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"></div>;
    },
  };
});

jest.mock("../../components/BannerSlider", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>;
    },
  };
});

describe("<Home/>", () => {
  it("Should banner and showcases", () => {
    renderWithTheme(<Home {...props} />);

    //Menu
    //expect(screen.getByTestId("Mock Menu")).toBeInTheDocument();

    //BannerSlider
    expect(screen.getByTestId("Mock BannerSlider")).toBeInTheDocument();

    //Sections
    expect(screen.getAllByTestId("Mock ShowCase")).toHaveLength(5);

    //Footer
    //expect(screen.getByTestId("Mock Footer")).toBeInTheDocument();
  });
});
