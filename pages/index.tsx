import { BeakerIcon, DocumentCheckIcon } from "@heroicons/react/24/solid";
import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-screen">
      <header
        className="bg-fixed h-[70svh] bg-[#141415] relative bg-cover bg-top flex items-center justify-center"
        style={{
          backgroundImage: `url("https://vault.uicore.co/it-business/wp-content/uploads/sites/14/2022/06/IT-Business-BG-Image.webp")`,
        }}
      >
        <div className="flex flex-col w-full max-w-[700px] space-y-5 text-center">
          <h1 className="text-6xl font-semibold text-zinc-200">
            Trouver un entretien n'a jamais été aussi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-amber-400">
              facile
            </span>
            .
          </h1>
          <p className="w-11/12 mx-auto text-lg text-center text-zinc-400/90">
            Avec Motivix, postulez rapidement, facilement et efficacement à des
            offres d'emploi grâce à des lettres de motivation 100% personnalisée
          </p>
          <button className="inline w-44 px-5 py-3 mx-auto font-semibold text-white border rounded bg-[#19191c] border-white/10">
            Créer un compte
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-96 gradient"></div>
      </header>
      <section className="relative w-full bg-[#19191c] pb-20 pt-10">
        <div className="max-w-[1050px] flex justify-center mx-auto">
          <div className="flex w-full gap-4">
            <div className="flex-1 px-4 py-6 space-y-3 border rounded-md border-zinc-700/40 bg-[#1b1b1e]">
              <DocumentCheckIcon className="w-6 text-zinc-400" />
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-zinc-300">
                  Lettre de motivations
                </h2>
                <p className="text-zinc-400">
                  Write a super-personalized cover letter in seconds with
                  AI—plus LinkedIn connection requests, resignation letters, and
                  more.
                </p>
              </div>
            </div>
            <div className="flex-1 px-4 py-6 space-y-3 border rounded-md border-zinc-700/40 bg-[#1b1b1e]">
              <DocumentCheckIcon className="w-6 text-zinc-400" />
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-zinc-300">
                  Lettre de motivations
                </h2>
                <p className="text-zinc-400">
                  Write a super-personalized cover letter in seconds with
                  AI—plus LinkedIn connection requests, resignation letters, and
                  more.
                </p>
              </div>
            </div>
            <div className="flex-1 px-4 py-6 space-y-3 border rounded-md border-zinc-700/40 bg-[#1b1b1e]">
              <DocumentCheckIcon className="w-6 text-zinc-400" />
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-zinc-300">
                  Lettre de motivations
                </h2>
                <p className="text-zinc-400">
                  Write a super-personalized cover letter in seconds with
                  AI—plus LinkedIn connection requests, resignation letters, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex items-center justify-center py-20 bg-zinc-900 border-y border-zinc-800"
        style={{
          backgroundImage: `url("https://vault.uicore.co/it-business/wp-content/uploads/sites/14/2022/06/IT-Business-BG-Image.webp")`,
        }}
      >
        <div className="max-w-[760px] flex justify-center">
          <div className="space-y-3 text-center">
            <h2 className="text-4xl font-semibold text-zinc-200">
              Passez{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-amber-400">
                directement
              </span>{" "}
              au concret.
            </h2>
            <div className="space-y-4">
              <p className="w-9/12 mx-auto text-lg text-center text-zinc-400/90">
                Avec Motivix, postulez rapidement, facilement et efficacement à
                des offres d'emploi grâce à des lettres de motivation 100%
                personnalisée
              </p>
              <button className="px-5 py-3 mx-auto text-sm font-semibold text-white border rounded bg-[#19191c] border-white/10">
                Créer un compte
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center py-20 bg-[#19191c]">
        <div className="max-w-[1050px] flex justify-center gap-24 items-center">
          <div className="w-6/12 space-y-3 text-left">
            <h2 className="text-4xl font-semibold text-zinc-200">
              Des lettres de motivations 100% personnalisées
            </h2>
            <div className="space-y-4">
              <p className="mx-auto text-lg text-left text-zinc-400/90">
                Avec Motivix, postulez rapidement, facilement et efficacement à
                des offres d'emploi grâce à des lettres de motivation 100%
                personnalisée
              </p>
              <button className="px-5 py-3 mx-auto text-sm font-semibold text-white border rounded bg-[#19191c] border-white/10">
                Créer un compte
              </button>
            </div>
          </div>
          <div className="h-[450px] w-6/12 bg-zinc-800"></div>
        </div>
      </section>
      <section className="flex items-center justify-center py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-[1050px] flex justify-center gap-24 items-center">
          <div className="h-[450px] w-6/12 bg-zinc-800"></div>
          <div className="w-6/12 space-y-3 text-left">
            <h2 className="text-4xl font-semibold text-zinc-200">
              Des templates Word premium pour toi.
            </h2>
            <div className="space-y-4">
              <p className="mx-auto text-lg text-left text-zinc-400/90">
                Avec l'abonnement premium, profitez de template de CV et de
                lettres de motivationd de qualité !
              </p>
              <button className="px-5 py-3 mx-auto text-sm font-semibold text-white border rounded bg-[#19191c] border-white/10">
                Créer un compte
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center py-20 bg-[#19191c]">
        <div className="max-w-[1050px] flex justify-center gap-24 items-center">
          <div className="w-6/12 space-y-3 text-left">
            <div className="inline-flex px-4 py-1 text-sm font-semibold tracking-wide rounded-full text-amber-100 bg-amber-500/50">
              Bientôt !
            </div>
            <h2 className="text-4xl font-semibold text-zinc-200">Roadmap</h2>
            <div className="space-y-4">
              <p className="mx-auto text-lg text-left text-zinc-400/90">
                Nous prévoyons la possiblité de générer des CV en ligne
                accessible depuis partout dans le monde, de générer des
                descriptions Linkedin de haute qualité et bien plus ! Découvrez
                notre roadmap !
              </p>
              <button className="px-5 py-3 mx-auto text-sm font-semibold text-white border rounded bg-[#19191c] border-white/10">
                Roadmap
              </button>
            </div>
          </div>
          <div className="h-[450px] w-6/12 bg-zinc-800"></div>
        </div>
      </section>
      <section
        className="flex items-center justify-center py-20 border-t bg-zinc-900 border-zinc-800"

      >
        <div className="max-w-[1050px] flex-col justify-center space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-4xl font-semibold text-zinc-200">
              Nos prix
            </h2>
            <div className="space-y-4">
              <p className="w-9/12 mx-auto text-lg text-center text-zinc-400/90">
                Suite à l'intérêt que notre MVP a entrainé lors de sa sortie,
              </p>
            </div>
          </div>
          
        <div className="flex gap-10">

                <div className="flex-1 py-4 border rounded px-7 border-zinc-700/40">
                  <h2 className="text-2xl font-semibold text-left text-white">Basic</h2>
                  <p className="text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium </p>
                  <p className="mt-4 text-4xl font-semibold text-zinc-200">0 CHF.- <span className="text-lg text-zinc-400">/Mois</span> </p>
                  <button className="block w-full px-4 py-3 font-semibold rounded mt-7 bg-zinc-800 text-zinc-200">Créer un compte</button>
                </div>
                <div className="flex-1 py-4 border rounded px-7 border-zinc-700/40">
                  <h2 className="text-2xl font-semibold text-left text-white">Basic</h2>
                  <p className="text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium </p>
                  <p className="mt-4 text-4xl font-semibold text-zinc-200">0 CHF.- <span className="text-lg text-zinc-400">/Mois</span> </p>
                  <button className="block w-full px-4 py-3 font-semibold rounded mt-7 bg-zinc-800 text-zinc-200">Créer un compte</button>
                </div>

        </div>


        </div>
      </section>

      
      <section
        className="flex items-center justify-center py-20 border-t bg-[#19191c] border-zinc-800"
        style={{
          backgroundImage: `url("https://vault.uicore.co/it-business/wp-content/uploads/sites/14/2022/06/IT-Business-BG-Image.webp")`,
        }}
      >
        <div className="max-w-[760px] flex justify-center">
          <div className="space-y-3 text-center">
            <h2 className="text-4xl font-semibold text-zinc-200">
              Merci pour votre soutien !
            </h2>
            <div className="space-y-4">
              <p className="w-9/12 mx-auto text-lg text-center text-zinc-400/90">
                Suite à l'intérêt que notre MVP a entrainé lors de sa sortie,
                nous avons décidé de l'améliorer pour vous afin de le rendre
                encore plus simple et efficace à utiliser !
              </p>
              <button className="px-5 py-3 mx-auto text-sm font-semibold text-white border rounded bg-[#19191c] border-white/10">
                Créer un compte
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
