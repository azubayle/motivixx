import Document, { Head, Html, Main, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Génère ta lettre de motivation en quelques secondes."
          />
          <meta
            property="og:description"
            content="Génère ta lettre de motivation en quelques secondes."
          />
          <meta property="og:title" content="Génère ta lettre de motivation facilement !" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Génère ta lettre de motivation facilement !" />
          <meta
            name="twitter:description"
            content="Génère ta lettre de motivation en quelques secondes.."
          />
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5264325397086435"
     crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
