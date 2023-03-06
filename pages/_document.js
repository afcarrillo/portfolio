import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=optional"
          rel="stylesheet"
        />
      </Head>

      <body id="page-top">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
