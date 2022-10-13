import Link from "next/link";
import { MdLockOutline, MdOutlineMailOutline } from "react-icons/md";
import Button from "../Button";
import TextField from "../TextField";
import * as S from "./styles";

const FormSignIn = () => {
  return (
    <S.Wrapper>
      <form>
        <TextField
          name="Email"
          placeholder="Email"
          type="email"
          icon={<MdOutlineMailOutline />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<MdLockOutline />}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        <Button size="large" fullWidth>
          Sign in now
        </Button>
        <S.FormLink>
          Don't have an account{" "}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  );
};

export default FormSignIn;
