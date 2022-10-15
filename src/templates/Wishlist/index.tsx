import GameCard from "../../components/GameCard";
import Heading from "../../components/Heading";
import ShowCase from "../../components/ShowCase";
import Base from "../Base";

import { Container } from "../../components/Container";
import { Grid } from "../../components/Grid";
import { Divider } from "../../components/Divider";

import { WishListTemplateProps } from "./types";
import Empty from "../../components/Empty";

const Wishlist = ({
  games = [],
  recommendedGames,
  recommendedHighlight,
}: WishListTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {games?.length > 0 ? (
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
          />
        )}
        <Divider />
      </Container>
      <ShowCase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Wishlist;
