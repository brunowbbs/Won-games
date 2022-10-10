import { fireEvent, screen } from "@testing-library/react";

import { renderWithTheme } from "../../utils/tests/helpers";

import GameCard from ".";
import theme from "../../styles/theme";
import { gameCardMock, gameCardsMock } from "./mock";

describe("<GameCard/>", () => {
  it("Should render correctly", () => {
    renderWithTheme(<GameCard {...gameCardMock} />);
    expect(screen.getByRole("heading", { name: /Population zero/i }));
    expect(screen.getByRole("heading", { name: /Rockstar Games/i }));
    expect(
      screen.getByRole("img", { name: gameCardMock.title })
    ).toHaveAttribute("src", gameCardMock.img);
    expect(screen.getByText(gameCardMock.price)).toBeInTheDocument();
  });

  it("Should render price in label", () => {
    //renderizar o componente
    //preço não tenho o line-trhough
    //preço tenha o background secundário

    renderWithTheme(<GameCard {...gameCardMock} promotionalPrice="" />);
    const price = screen.getByText("R$ 235,00");
    expect(price).not.toHaveStyle({ textDecoration: "line-through" });
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it("Should render a line-throug in price when promotional", () => {
    //renredizar o componente
    //preço tenha line-through (200)
    //preço novo promocional não vai ter line through (15)
    renderWithTheme(
      <GameCard
        {...gameCardMock}
        price="R$ 200,00"
        promotionalPrice="R$ 15,00"
      />
    );
    const price = screen.getByText("R$ 200,00");
    const promocionalPrice = screen.getByText("R$ 15,00");
    expect(price).toHaveStyle({ textDecoration: "line-through" });
    expect(promocionalPrice).not.toHaveStyle({
      textDecoration: "line-through",
    });
  });

  it("Should render a filled favorite when favorite is true", () => {
    renderWithTheme(<GameCard {...gameCardMock} favorite />);
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it("Should call onFav method when favorite is clicked", () => {
    const onFav = jest.fn();

    renderWithTheme(<GameCard {...gameCardMock} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(onFav).toBeCalled();
  });

  it("Should render Ribbon", () => {
    renderWithTheme(
      <GameCard
        {...gameCardMock}
        ribbon="My ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary });
    expect(ribbon).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" });
    expect(ribbon).toBeInTheDocument();
  });
});
