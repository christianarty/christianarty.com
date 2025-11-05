import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Component {...pageProps} />;
    </>
  );
}
