import { screen, render } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import GameDetails from ".";

import { GameDetailsProps } from "./types";

const props: GameDetailsProps = {
  developer: "Different Tales",
  platforms: ["linux", "windows"],
  releaseDate: "2022-11-16T23:00:00",
  rating: "BR0",
  genres: ["Role-playing", "Narrative"],
};

describe("<GameDetails/>", () => {
  it("Should render the heading", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(
      screen.getByRole("heading", { name: /developer/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /platforms/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /publisher/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /release date/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /rating/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /genres/i })
    ).toBeInTheDocument();
  });

  it("Should render platforms icons", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole("img", { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /linux/i })).toBeInTheDocument();
  });

  it("Should render free rating when BR0", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it("Should render 18+ rating when BR18", () => {
    renderWithTheme(<GameDetails {...props} rating="BR16" />);

    expect(screen.getByText(/16\+/i)).toBeInTheDocument();
  });

  it("Should render the formatter date", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText("Nov 16, 2022")).toBeInTheDocument();
  });

  it("Should render a list of genres", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText("Role-playing / Narrative")).toBeInTheDocument();
  });
});
