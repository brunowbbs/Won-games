import theme from "@/styles/theme";
import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "src/styles/global";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut ico" href="/img/icon-512.png" />
        <title>React Avançado - Boilerplate</title>
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
