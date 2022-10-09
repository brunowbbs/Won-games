import GameCard from "src/components/GameCard";
import { gameCardMock } from "src/mocks/gameCard";

export default function Home() {
  return (
    <div style={{ maxWidth: "30rem" }}>
      <GameCard {...gameCardMock} favorite />
    </div>
  );
}
