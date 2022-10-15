import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import GameItem from ".";
import { gameItemMock } from "./mock";

describe("<GameItem/>", () => {
  it("should render the heading", () => {
    renderWithTheme(<GameItem {...gameItemMock} />);

    expect(
      screen.getByRole("heading", { name: /red dead redemption 2/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: /red dead redemption 2/i })
    ).toHaveAttribute(
      "src",
      "https://source.unsplash.com/user/willianjusten/151x70"
    );

    expect(screen.getByText("R$ 215,00")).toBeInTheDocument();
  });

  it("should render the item with download link", () => {
    const downloadLink = "http://link";

    renderWithTheme(<GameItem {...gameItemMock} downloadLink={downloadLink} />);

    expect(
      screen.getByRole("link", { name: `Get ${gameItemMock.title} here` })
    ).toHaveAttribute("href", downloadLink);
  });

  it("should render the payment info", () => {
    const paymentInfo = {
      flag: "mastercard",
      img: "/img/master-card.png",
      number: "**** **** **** 4326",
      purchaseDate: "Purchase made on 07/20/2020 at 20:32",
    };
    renderWithTheme(<GameItem {...gameItemMock} />);

    expect(screen.getByRole("img", { name: paymentInfo.flag })).toHaveAttribute(
      "src",
      paymentInfo.img
    );

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument();
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
  });
});
