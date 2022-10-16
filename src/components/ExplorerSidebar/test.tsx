import { render, screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import ExplorerSidebar from ".";
import { explorerSidebarMock } from "./mock";
import userEvent from "@testing-library/user-event";

describe("<Footer/>", () => {
  it("Should render 4 columns topics", () => {
    renderWithTheme(
      <ExplorerSidebar onFilter={jest.fn} items={explorerSidebarMock} />
    );

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
    renderWithTheme(
      <ExplorerSidebar onFilter={jest.fn} items={explorerSidebarMock} />
    );

    expect(
      screen.getByRole("checkbox", { name: /under \$50/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("radio", { name: /low to high/i })
    ).toBeInTheDocument();
  });

  it("should render the filter button", () => {
    renderWithTheme(
      <ExplorerSidebar onFilter={jest.fn} items={explorerSidebarMock} />
    );
    expect(screen.getByRole("button", { name: /filter/i })).toBeInTheDocument();
  });

  it("should check initial values that are passed", () => {
    renderWithTheme(
      <ExplorerSidebar
        onFilter={jest.fn}
        items={explorerSidebarMock}
        initialValues={{ windows: true, sort_by: "low-to-high" }}
      />
    );

    expect(screen.getByRole("checkbox", { name: /windows/i })).toBeChecked();
    expect(screen.getByRole("radio", { name: /low to high/i })).toBeChecked();
  });

  it("should filter with initial values", () => {
    const onFilter = jest.fn();

    renderWithTheme(
      <ExplorerSidebar
        items={explorerSidebarMock}
        initialValues={{ windows: true, sort_by: "low-to-high" }}
        onFilter={onFilter}
      />
    );

    userEvent.click(screen.getByRole("button", { name: /filter/i }));

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: "low-to-high" });
  });

  it("should filter with checked values", () => {
    const onFilter = jest.fn();

    renderWithTheme(
      <ExplorerSidebar items={explorerSidebarMock} onFilter={onFilter} />
    );

    userEvent.click(screen.getByRole("checkbox", { name: /windows/i }));
    userEvent.click(screen.getByRole("checkbox", { name: /linux/i }));
    userEvent.click(screen.getByRole("radio", { name: /low to high/i }));

    userEvent.click(screen.getByRole("button", { name: /filter/i }));

    expect(onFilter).toBeCalledWith({
      windows: true,
      linux: true,
      sort_by: "low-to-high",
    });
  });

  it("should altern between radio options", () => {
    const onFilter = jest.fn();

    renderWithTheme(
      <ExplorerSidebar items={explorerSidebarMock} onFilter={onFilter} />
    );

    userEvent.click(screen.getByRole("radio", { name: /low to high/i }));
    userEvent.click(screen.getByRole("radio", { name: /high to low/i }));

    // userEvent.click(screen.getByRole("checkbox", { name: /windows/i }));
    // userEvent.click(screen.getByRole("checkbox", { name: /windows/i }));

    userEvent.click(screen.getByRole("button", { name: /filter/i }));

    expect(onFilter).toBeCalledWith({ sort_by: "high-to-low" });
  });
});
