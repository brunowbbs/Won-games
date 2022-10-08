import { MdMenu, MdShoppingCart, MdSearch } from "react-icons/md";
import Logo from "../Logo";

import * as S from "./styles";

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MdMenu size={30} aria-label="Open Menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>

    <S.MenuGroup>
      <S.IconWrapper>
        <MdSearch size={30} aria-label="Search" />
      </S.IconWrapper>
      <S.IconWrapper>
        <MdShoppingCart size={30} aria-label="Open Shopping Cart" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
);

export default Menu;
