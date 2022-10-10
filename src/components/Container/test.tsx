import { renderWithTheme } from "../../utils/tests/helpers";
import "jest-styled-components";

import { Container } from ".";
import theme from "../../styles/theme";

describe("<Container/>", () => {
  it("Should render the container", () => {
    const { container } = renderWithTheme(<Container />);

    expect(container.firstChild).toHaveStyleRule(
      "max-width",
      theme.grid.container
    );
  });

  it("Should render the container", () => {
    const { container } = renderWithTheme(<Container />);

    expect(container.firstChild).toHaveStyleRule(
      "max-width",
      theme.grid.container
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
