import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [state, handleSubmit] = useForm("xpzewore");
  const [success, setSuccess] = useState(false);
  if (state.succeeded) {
  }

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Génère ta lettre de motivation facilement !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20 ">
        {!state.succeeded ? (
          <form onSubmit={handleSubmit}>
            <h1 className="sm:text-6xl text-4xl  font-bold text-slate-900">
              Nous contacter <span className="text-teal-400">.</span>
            </h1>
            <div className="w-full flex mt-10 items-center space-x-3">
              <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
                1
              </div>
              <label
                htmlFor="email"
                className="text-left font-medium cursor-pointer"
              >
                Adresse e-mail
              </label>
            </div>
            <input
              id="email"
              type="email"
              name="email"
              className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
            ></input>{" "}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />{" "}
            <div className="w-full flex mt-10 items-center space-x-3">
              <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
                2
              </div>
              <label
                htmlFor="message"
                className="text-left font-medium cursor-pointer"
              >
                Message
              </label>
            </div>
            <textarea
              id="message"
              name="message"
              className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-teal-500 transition w-full"
              type="submit"
              disabled={state.submitting}
            >
              Envoyer
            </button>
          </form>
        ) : (
          <div>
            <h1 className="sm:text-5xl text-3xl  font-bold text-slate-900">
              Message envoyé avec succès
            </h1>

            <div className="flex justify-center mt-5">
              <Link
                href="../../"
                className="flex space-x-3  text-xl text-teal-400 underline"
              >
                Accueil
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
