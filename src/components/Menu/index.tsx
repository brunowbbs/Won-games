import { useState } from "react";
import { MdMenu, MdShoppingCart, MdSearch, MdClose } from "react-icons/md";
import Button from "../Button";
import Logo from "../Logo";
import MediaMatch from "../MediaMatch";

import * as S from "./styles";
import { MenuProps } from "./types";

const Menu = ({ userName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MdMenu size={30} aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!userName && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <MdSearch size={30} aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <MdShoppingCart size={30} aria-label="Open Shopping Cart" />
        </S.IconWrapper>

        {!userName && (
          <MediaMatch greaterThan="medium">
            <Button size="small">Sign in</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <MdClose
          size={30}
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!userName && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!userName && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Sign Up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
