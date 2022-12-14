import Link from "next/link";
import Heading from "../../../src/components/Heading";
import Logo from "../../../src/components/Logo";
import * as S from "./styles";

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>
        <div>
          <Heading>All your favorite games in on place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gamming platform
          </S.Subtitle>
        </div>
        <S.Footer>Won Games 2022 | Todos os direitos reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft size="small">
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;
