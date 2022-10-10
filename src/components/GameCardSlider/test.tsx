import "../../../.jest/match-media-mock";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import GameCardSlider from ".";

import { gameCardsMock } from "../../mocks/gameCard";

describe("<GameSlider />", () => {
  const { container } = renderWithTheme(
    <GameCardSlider items={gameCardsMock} />
  );
  expect(container.querySelectorAll(".slick-active")).toHaveLength(4);
});

it("should render white arrows if color passed", () => {
  renderWithTheme(<GameCardSlider items={gameCardsMock} color="white" />);

  /*  expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
    color: "#FAFAFA",
  });
  expect(screen.getByLabelText(/next games/i)).toHaveStyle({
    color: "#FAFAFA",
  });*/
});
