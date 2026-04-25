import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/logo-oliver.jpg" />
        <link rel="apple-touch-icon" href="/logo-oliver.jpg" />
        <meta name="theme-color" content="#082947" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:image" content="/logo-oliver.jpg" />
        <meta property="og:site_name" content="Oliver Cocina por Ti" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo-oliver.jpg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
