import Link from "next/link";
import {
  MdAccountCircle,
  MdCreditCard,
  MdExitToApp,
  MdFormatListBulleted,
} from "react-icons/md";
import * as S from "./styles";
import { ProfileMenuProps } from "./types";

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === "/profile/me"} title="My profile">
          <MdAccountCircle size={24} />
          <span>My Profile</span>
        </S.Link>
      </Link>

      <Link href="/profile/cards" passHref>
        <S.Link isActive={activeLink === "/profile/cards"} title="My cards">
          <MdCreditCard size={24} />
          <span>My Cards</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.Link isActive={activeLink === "/profile/orders"} title="My orders">
          <MdFormatListBulleted size={24} />
          <span>My Orders</span>
        </S.Link>
      </Link>

      <Link href="/logout" passHref>
        <S.Link>
          <MdExitToApp size={24} />
          <span>Sign out</span>
        </S.Link>
      </Link>
    </S.Nav>
  );
};

export default ProfileMenu;
