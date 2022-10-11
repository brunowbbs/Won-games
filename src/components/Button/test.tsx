import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import { FaBeer } from "react-icons/fa";
import "jest-styled-components";

import Button from ".";

describe("<Button/>", () => {
  it("Should render the medium size by default", () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1.4rem",
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render the small size", () => {
    renderWithTheme(<Button size="small">Buy Now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "3rem",
      "font-size": "1.2rem",
    });
  });

  it("Should render the large size", () => {
    renderWithTheme(
      <Button icon={<FaBeer data-testid="icon" />}>Buy Now</Button>
    );
    expect(
      screen.getByRole("button", { name: /Buy now/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("Should render a fullwidth version", () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      width: "100%",
    });
  });

  it("Should render an icon version", () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      width: "100%",
    });
  });

  it("Should render button has a link", () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy Now
      </Button>
    );

    expect(screen.getByRole("link", { name: /Buy now/i })).toHaveAttribute(
      "href",
      "/link"
    );
  });

  it("Should render a minimal version", () => {
    renderWithTheme(
      <Button size="small" minimal>
        Buy Now
      </Button>
    );

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyle({
      backgroundColor: "none",
      color: "#F231A5",
    });

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyleRule(
      "background",
      "none",
      { modifier: ":hover" }
    );
  });
});
