import { Container } from "src/components/Container";
import Heading from "src/components/Heading";
import ProfileMenu from "src/components/ProfileMenu";
import Base from "../Base";
import * as S from "./styles";
import { ProfileTemplateProps } from "./types";

const Profile = ({ children }: ProfileTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Profile
        </Heading>

        <S.Main>
          <ProfileMenu />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  );
};

export default Profile;
