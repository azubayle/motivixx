import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5264325397086435"
     crossorigin="anonymous"></script>
      <a
        href="https://www.buymeacoffee.com/justincappelle"
        className="fixed bottom-10 right-10 hidden lg:block"
      >
        <img src="https://img.buymeacoffee.com/button-api/?text=Soutenir l'initiative&emoji=🤖&slug=justincappelle&button_colour=FF5F5F&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" />
      </a>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;