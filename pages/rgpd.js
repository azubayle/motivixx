import Head from "next/head";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";

export default function RGPD() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Génère ta lettre de motivation facilement !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center px-4 mt-5 text-left">
        <div>
          <div className="space-y-2 mb-6">
            <h1 className="text-2xl ">Politique de confidentialité RGPD</h1>
          </div>
          <div className="space-y-4">
            <div className="space-y-3 mt-1 text-zinc-300">
              <p className="">
                Notre site Web, Motivix.vercel.app , utilise l'API de ChatGPT pour
                générer des lettres de motivation en utilisant les informations
                entrées par l'utilisateur. Nous ne collectons, n'enregistrons ni
                ne stockons aucune donnée personnelle de nos utilisateurs. Les
                informations entrées par l'utilisateur dans notre site web sont
                transmises directement à l'API de ChatGPT pour génération de la
                lettre de motivation, et ne sont pas stockées ni sauvegardées
                par notre site web. 
              </p>
              <p>Notre site web n'utilise pas de cookies ni
                de technologies de suivi pour collecter des informations sur les
                utilisateurs. </p>
              <p>En utilisant notre site web, vous acceptez cette
                politique de confidentialité et consentez à l'utilisation de vos
                informations de cette manière. Si vous avez des questions sur
                notre politique de confidentialité, veuillez nous contacter à
                justincappelle@outlook.com. </p>
              <p>Nous nous réservons le droit de
                modifier cette politique de confidentialité à tout moment en
                publiant une nouvelle version sur notre site web.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
