import Head from "next/head";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";

export default function CGU() {
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
            <h1 className="text-2xl ">
              Conditions générales d'utilisation pour Motivix
            </h1>
          </div>
          <div className="space-y-4">
            <div className="space-y-1 mt-1">
              <h2 className="text-xl">1. Définitions</h2>

              <p className="text-slate-600">
                (a) "Motivix" désigne le générateur de lettres de motivation,
                développé par le créateur résidant en Suisse et disponible à
                l'adresse motivix.vercel.app.
              </p>
              <p className="text-slate-600">
                (b) "Utilisateur" désigne toute personne qui utilise Motivix.
              </p>
            </div>
            <h2 className="text-xl">2. Accord</h2>
            <p className="text-slate-600">
              {" "}
              En utilisant Motivix, l'Utilisateur reconnaît avoir lu, compris et
              accepté les présentes conditions générales. Si l'Utilisateur n'est
              pas d'accord avec les présentes conditions générales, il ne doit
              pas utiliser Motivix.
            </p>

            <h2 className="text-xl"> 3. Utilisation</h2>
            <p className="text-slate-600">
              {" "}
              Motivix est conçu pour être un outil d'aide à la rédaction de
              lettres de motivation. En utilisant Motivix, l'utilisateur accepte
              que les résultats ne sont pas garantis et que les données fournies
              peuvent être imprécises ou ne pas correspondre entièrement à ses
              attentes. L'utilisateur est invité à relire la lettre de
              motivation et à apporter des retouches avant de l'envoyer à un
              tiers.{" "}
            </p>

            <h2 className="text-xl"> 4. Responsabilité</h2>
            <p className="text-slate-600">
              {" "}
              L'utilisateur est seul responsable de l'utilisation qu'il fait de
              Motivix et des conséquences résultant de celle-ci. Le créateur ne
              sera pas tenu responsable des dommages causés par l'utilisation de
              Motivix.{" "}
            </p>

            <h2 className="text-xl"> 5. Modifications</h2>
            <p className="text-slate-600">
              {" "}
              Le créateur se réserve le droit d'apporter des modifications à
              Motivix et aux présentes conditions générales à tout moment et
              sans préavis.{" "}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
