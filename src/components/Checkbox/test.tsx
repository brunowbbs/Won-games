import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../utils/tests/helpers";
import Checkbox from ".";

describe("<Checkbox", () => {
  it("Should render with label", () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(
      screen.getByRole("checkbox", { name: /checkbox label/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute("for", "check");
  });

  it("Should render without label", () => {
    renderWithTheme(<Checkbox />);
    expect(screen.queryByLabelText("Checkbox")).not.toBeInTheDocument();
  });

  it("Should render with black label", () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    );
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: "#030517",
    });
  });

  it("Should dispatch onCheck when status change", async () => {
    const onCheck = jest.fn();
    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);
    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole("checkbox"));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it("Should dispatch onCheck when status change", async () => {
    const onCheck = jest.fn();
    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);
    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole("checkbox"));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it("should be accessible with tab", () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(document.body).not.toHaveFocus();
    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
