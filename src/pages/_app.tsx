import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Wine frontend challenge</title>
        {/* <link rel="shortcut icon" href="" /> */}
        {/* <link rel="apple-touch-icon" href="" /> */}
        <meta name="theme-color" content="#dedede" />
        <meta
          name="description"
          content="A project for Wine Group. Frontend challenge with TypeScript, React, NextJS and Styled Components."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
