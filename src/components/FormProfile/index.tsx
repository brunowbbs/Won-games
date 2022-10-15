import Button from "../Button";
import Heading from "../Heading";
import TextField from "../TextField";
import * as S from "./styles";

const FormProfile = () => {
  return (
    <S.Wrapper>
      <Heading size="small" lineBottom color="black">
        My Profile
      </Heading>

      <S.Form>
        <TextField
          name="name"
          placeholder="Name"
          label="name"
          initialValue="Jonh Cage"
        />

        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          initialValue="Jonhcage@gmail.com"
          label="E-mail"
          disabled
        />

        <TextField
          name="password"
          type="password"
          placeholder="Type your password"
          label="Password"
        />

        <TextField
          name="new_password"
          type="password"
          placeholder="New password"
          label="New Password"
        />

        <Button size="large">Save</Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default FormProfile;
