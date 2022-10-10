import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import Ribbon from ".";
import Banner from "../Banner";
import { bannerMock } from "../Banner/mock";

describe("<Ribbon/>", () => {
  it("Should render the text correctly", () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);
    expect(screen.getByText(/best seller/i)).toBeInTheDocument();
  });

  it("Should render with primary collor", () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: "#F231A5",
    });
  });

  it("Should render with secondary collor", () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: "#3CD3C1",
    });
  });

  it("Should render with the normal size as default", () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: "3.6rem",
      fontSize: "1.4rem",
    });
  });

  it("Should render with the small size as default", () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: "2.6rem",
      fontSize: "1.2rem",
    });
  });

  it("Should render a Ribbon", () => {
    renderWithTheme(
      <Banner
        {...bannerMock}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonCollor="secondary"
      />
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" });
    expect(ribbon).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" });
  });
});
