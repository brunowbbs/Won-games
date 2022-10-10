import "../../../.jest/match-media-mock";
import { renderWithTheme } from "../../utils/tests/helpers";

import GameCardSlider from ".";
import { gameCardsMock } from "./mock";

describe("<GameSlider />", () => {
  const { container } = renderWithTheme(
    <GameCardSlider items={gameCardsMock} />
  );
  expect(container.querySelectorAll(".slick-active")).toHaveLength(4);
});

it("should render white arrows if color passed", () => {
  renderWithTheme(<GameCardSlider items={gameCardsMock} color="white" />);
});
