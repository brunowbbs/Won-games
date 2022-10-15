import { Grid } from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Grid/>", () => {
  it("Should render correctly", () => {
    const { container } = renderWithTheme(<Grid>Children</Grid>);

    expect(container.firstChild).toMatchSnapshot();
  }); 
});
