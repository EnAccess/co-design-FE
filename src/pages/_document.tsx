import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <body className="min-w-minWidth max-w-maxWidth mx-auto overflow-x-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
