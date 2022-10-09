import "../../../.jest/match-media-mock";

import { bannerSliderMock } from "../../mocks/bannerSlider";
import { renderWithTheme } from "../../utils/tests/helpers";

import BannerSlider from ".";
import { screen } from "@testing-library/react";

describe("<BannerSlider/>", () => {
  it("Should render vertical slider", () => {
    const { container } = renderWithTheme(
      <BannerSlider items={bannerSliderMock} />
    );

    expect(container.querySelector(".slick-vertical")).toBeInTheDocument();
  });

  it("Should render with 1 active item", () => {
    const { container } = renderWithTheme(
      <BannerSlider items={bannerSliderMock} />
    );

    expect(container.querySelectorAll(".slick-slide")).toHaveLength(3);
    expect(container.querySelectorAll("li.slick-active")).toHaveLength(1);

    expect(
      screen.getByRole("heading", { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument();
  });

  it("Should render with the dots", () => {
    const { container } = renderWithTheme(
      <BannerSlider items={bannerSliderMock} />
    );

    expect(container.querySelector(".slick-dots")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
