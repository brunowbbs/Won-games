import { bannersMock } from "src/components/Banner/mock";
import Empty from "src/components/Empty";

import { gameCardsMock } from "src/components/GameCard/mock";
import { highlightMock } from "src/components/Highlight/mock";
import Home from "src/templates/Home";
import { HomeTemplateProps } from "src/templates/Home/types";

// export default function Index(props: HomeTemplateProps) {
//   return <Home {...props} />;
// }

const props = {
  title: "A simple title",
  description: "A simple description",
};

export default function Index() {
  return <Empty {...props} hasLink />;
}

//ATENÇÃO
//Os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

//Static => gerar statico em build time
export function getStaticProps() {
  //faz a lógica
  //pode ser buscar dados numa API
  //fazer cálculo|leitura de context

  //retorna os dados
  return {
    props: {
      banners: bannersMock,
      newGames: gameCardsMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gameCardsMock,
      upCommingGames: gameCardsMock,
      upCommingMoreGames: gameCardsMock,
      upCommingHighlight: highlightMock,
      freeGames: gameCardsMock,
      freeHighlight: highlightMock,
    },
  };
}

//ServerSide => gerar via ssr a cada requestgerar via ssr a cada request
/*export function getServerSideProps() {
  //faz a lógica
  //pode ser buscar dados numa API
  //fazer cálculo|leitura de context

  //retorna os dados
  return {
    props: {
      heading: "Olha eu aqui!",
    },
  };
}*/

//getInitialProps => gerar via ssr a cada request (mesma coisa dos outros (porem antes utilizava-se esse))
