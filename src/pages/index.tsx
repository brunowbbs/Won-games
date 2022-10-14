import { bannersMock } from "src/components/Banner/mock";
import Gallery from "src/components/Gallery";
import { galleryMock } from "src/components/Gallery/mock";

import { gameCardsMock } from "src/components/GameCard/mock";
import { highlightMock } from "src/components/Highlight/mock";
import { HomeTemplateProps } from "src/templates/Home/types";

// export default function Index(props: HomeTemplateProps) {
//   return <Home {...props} />;
// }

const args = {
  items: galleryMock,
};

export default function Index(props: HomeTemplateProps) {
  return (
    <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
      <Gallery {...args} />
    </div>
  );
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
