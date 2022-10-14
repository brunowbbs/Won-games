import { FaApple, FaLinux, FaWindows } from "react-icons/fa";
import Heading from "../Heading";
import MediaMatch from "../MediaMatch";
import * as S from "./styles";
import { GameDetailsProps } from "./types";

const GameDetails = ({
  platforms,
  developer,
  releaseDate,
  rating,
  genres,
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <FaLinux size={18} title="linux" color="#FFF" />,
    mac: <FaApple size={18} title="apple" color="#FFF" />,
    windows: <FaWindows size={18} title="windows" color="#FFF" />,
  };

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>
      <S.Content>
        <S.Block>
          <S.Title>Developer</S.Title>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Platforms</S.Title>
          <S.WrapperIcons>
            {platforms.map((icon) => (
              <S.Icon key={icon} role="img" aria-label={icon}>
                {platformIcons[icon]}
              </S.Icon>
            ))}
          </S.WrapperIcons>
        </S.Block>

        <S.Block>
          <S.Title>Publisher</S.Title>
          <S.Description>2K</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Release Date</S.Title>
          <S.Description>
            {new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Rating</S.Title>
          <S.Description>
            {rating === "BR0" ? "FREE" : rating.replace("BR", "") + "+"}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Genres</S.Title>
          <S.Description>{genres.join(" / ")}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameDetails;
