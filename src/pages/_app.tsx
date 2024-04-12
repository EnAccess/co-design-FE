import { Header } from "../components/header";
import "../styles/globals.css";
import "reactflow/dist/style.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
