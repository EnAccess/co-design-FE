import { Header } from "../components/header";
import "../styles/globals.css";
import "reactflow/dist/style.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { HighlightProvider } from "../context/highlight";
import { FilterProvider } from "@/context/filter";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FilterProvider>
      <HighlightProvider>
        <DefaultSeo {...SEO} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </HighlightProvider>
    </FilterProvider>
  );
}
