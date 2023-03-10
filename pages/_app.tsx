import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="fixed top-0 flex items-center justify-between px-10 py-4 border-b z-[999999999999] border-white/10 bg-zinc-900 w-full">
        <ul className="flex items-center gap-7">
          <Link href="../">
          <p className="text-2xl font-semibold text-white">Motivix</p>
          </Link>
          <li className="text-sm text-zinc-400 ">Générer une lettre</li>
          <li className="text-sm text-zinc-400 ">Templates</li>
          <li className="text-sm text-zinc-400 ">Prix</li>
        </ul>
        <div className="flex gap-2">
          <button className="bg-[#ffb99700] border-zinc-700 border text-sm rounded px-5 py-3 text-zinc-400 font-semibold">
            Se connecter
          </button>
          <button className="inline w-40 px-5 py-3 mx-auto text-sm font-semibold text-white border rounded bg-[#19191c] border-white/10">
            Créer un compte
          </button>
        </div>
      </nav>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
