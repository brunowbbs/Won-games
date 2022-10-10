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

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      />
    `);
  });
});
