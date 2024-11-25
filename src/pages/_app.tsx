import { Header } from "../components/header";
import "../styles/globals.css";
import "@xyflow/react/dist/style.css";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { HighlightProvider } from "../context/highlight";
import { FilterProvider } from "@/context/filter";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FilterProvider>
      <HighlightProvider>
        <DefaultSeo {...SEO} />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </HighlightProvider>
    </FilterProvider>
  );
}
