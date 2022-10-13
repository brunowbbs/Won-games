import "../../../.jest/match-media-mock";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import ShowCase from ".";
import { gameCardsMock } from "../GameCard/mock";
import { highlightMock } from "../Highlight/mock";

const props = {
  title: "Most popular",
  highlight: highlightMock,
  games: gameCardsMock.slice(0, 1),
};

describe("<ShowCase/>", () => {
  it("Should render full showcase", () => {
    renderWithTheme(<ShowCase {...props} />);

    expect(
      screen.getByRole("heading", { name: /most popular/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: highlightMock.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: gameCardsMock[0].title })
    ).toBeInTheDocument();
  });

  it("Should render without title", () => {
    renderWithTheme(
      <ShowCase games={props.games} highlight={props.highlight} />
    );

    expect(screen.getByRole("heading", { name: highlightMock.title }));
    expect(screen.getByRole("heading", { name: gameCardsMock[0].title }));

    expect(
      screen.queryByRole("heading", { name: /most popular/i })
    ).not.toBeInTheDocument();
  });

  it("Should render without highlight", () => {
    renderWithTheme(<ShowCase title={props.title} games={props.games} />);

    screen.getByRole("heading", { name: /most popular/i });
    screen.getByRole("heading", { name: gameCardsMock[0].title });
    expect(
      screen.queryByRole("heading", { name: highlightMock.title })
    ).not.toBeInTheDocument();
  });

  it("Should render without games", () => {
    renderWithTheme(
      <ShowCase title={props.title} highlight={props.highlight} />
    );

    screen.getByRole("heading", { name: /most popular/i });
    screen.getByRole("heading", { name: highlightMock.title });
    expect(
      screen.queryByRole("heading", { name: gameCardsMock[0].title })
    ).not.toBeInTheDocument();
  });
});
