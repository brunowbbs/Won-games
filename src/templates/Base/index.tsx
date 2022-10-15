import Footer from "../../components/Footer";
import { Container } from "../../components/Container";
import Menu from "../../components/Menu";
import { BaseTemplateProps } from "./types";

import * as S from "./styles";

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>

    <S.Content>{children}</S.Content>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
);

export default Base;
