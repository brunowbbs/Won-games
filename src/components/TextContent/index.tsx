import Heading from "../Heading";
import * as S from "./styles";

export type TextContentProps = {
  title?: string;
  content: string;
};

const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <S.Wrapper>
      {!!title && <Heading>{title}</Heading>}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.Wrapper>
  );
};

export default TextContent;
