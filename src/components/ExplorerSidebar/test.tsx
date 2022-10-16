import { render, screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import ExplorerSidebar from ".";
import { explorerSidebarMock } from "./mock";

describe("<Footer/>", () => {
  it("Should render 4 columns topics", () => {
    renderWithTheme(<ExplorerSidebar items={explorerSidebarMock} />);

    expect(screen.getByRole("heading", { name: /price/i })).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /sort by/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /system/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /genre/i })).toBeInTheDocument();
  });

  it("Should render inputs", () => {
    renderWithTheme(<ExplorerSidebar items={explorerSidebarMock} />);

    expect(
      screen.getByRole("checkbox", { name: /under \$50/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("radio", { name: /low to high/i })
    ).toBeInTheDocument();
  });

  it("should render the filter button", () => {
    renderWithTheme(<ExplorerSidebar items={explorerSidebarMock} />);
    expect(screen.getByRole("button", { name: /filter/i })).toBeInTheDocument();
  });
});
