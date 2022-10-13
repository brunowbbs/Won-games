import Footer from "../../components/Footer";
import { Container } from "../../components/Container";
import Menu from "../../components/Menu";
import { BaseTemplateProps } from "./types";

import * as S from "./styles";

const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu />
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Base;
