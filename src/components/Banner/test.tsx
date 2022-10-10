import { screen } from "@testing-library/react";

import { renderWithTheme } from "../../utils/tests/helpers";

import Banner from ".";
import { bannerMock } from "./mock";

describe("<Banner/>", () => {
  it("Should render correctly", () => {
    const { container } = renderWithTheme(<Banner {...bannerMock} />);

    expect(screen.getByRole("heading", { name: /Defy death/i }));
    expect(
      screen.getByRole("heading", { name: /Play the new CrashLand season/i })
    );
    expect(
      screen.getByRole("img", { name: /Defy death/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
