import "../../../.jest/match-media-mock";
import { fireEvent, screen } from "@testing-library/react";

import { renderWithTheme } from "../../utils/tests/helpers";

import Gallery from ".";
import { galleryMock } from "./mock";

describe("<Gallery/>", () => {
  it("Should render thumbnails as buttons", () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />);

    expect(
      screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute("src", galleryMock[0].src);

    expect(
      screen.getByRole("button", { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute("src", galleryMock[1].src);
  });

  it("Should handle open modal", () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />);

    //Selecionar o modal
    const modal = screen.getByLabelText("modal");

    //verificar se o modal está escondido
    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0 });

    //clicar na imagem para abrir o modal
    fireEvent.click(
      screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })
    );

    //Verifica se o area hidden ficou false (modal abriu)
    expect(modal.getAttribute("aria-hidden")).toBe("false");
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it("Should handle close modal when overlay or button clicked", () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />);

    //Selecionar o modal
    const modal = screen.getByLabelText("modal");

    //clicar na imagem para abrir o modal
    fireEvent.click(
      screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })
    );

    //clicar no botão para fechar o modal
    fireEvent.click(screen.getByRole("button", { name: /close modal/i }));

    //verifica se o modal foi fechado
    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it("Should handle close modal when esc button is pressed", () => {
    const { container } = renderWithTheme(
      <Gallery items={galleryMock.slice(0, 2)} />
    );

    //Selecionar o modal
    const modal = screen.getByLabelText("modal");

    //clicar na imagem para abrir o modal
    fireEvent.click(
      screen.getByRole("button", { name: /Thumb - Gallery Image 1/i })
    );

    //clicar no botão para fechar o modal
    fireEvent.keyUp(container, { key: "Escape" });

    //verifica se o modal foi fechado
    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it("Should open modal with selected image", async () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />);

    // clicar no thumbnail
    fireEvent.click(
      screen.getByRole("button", { name: /Thumb - Gallery Image 2/i })
    );

    //espero que a imagem da thumbnail seja aberta
    const img = await screen.findByRole("img", { name: /Gallery Image 2/i });
    expect(img.parentElement?.parentElement).toHaveClass("slick-active");
  });
});
