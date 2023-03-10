import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";

export default function CGU() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <Head>
        <title>Génère ta lettre de motivation facilement !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center py-40 text-zinc-200">
        <div className="w-[1050px]">
          <div className="mb-6 space-y-2">
            <h1 className="text-2xl font-semibold ">
              Conditions générales d'utilisation pour Motivix
            </h1>
          </div>
          <div className="space-y-4">
            <div className="mt-1 space-y-1">
              <h2 className="text-lg">1. Définitions</h2>

              <p className="text-zinc-400">
                (a) "Motivix" désigne le générateur de lettres de motivation,
                développé par le créateur résidant en Suisse et disponible à
                l'adresse motivix.vercel.app.
              </p>
              <p className="text-zinc-400">
                (b) "Utilisateur" désigne toute personne qui utilise Motivix.
              </p>
            </div>
            <h2 className="text-lg">2. Accord</h2>
            <p className="text-zinc-400">
              {" "}
              En utilisant Motivix, l'Utilisateur reconnaît avoir lu, compris et
              accepté les présentes conditions générales. Si l'Utilisateur n'est
              pas d'accord avec les présentes conditions générales, il ne doit
              pas utiliser Motivix. De plus, l'Utilisateur s'engage à ne pas
              entrer de contenu offensant, choquant ou vulgaire. L'Utilisateur
              s'engage également à n'entrer que des informations véridiques et
              vérifiées dans les champs des différents formulaire du site.
            </p>

            <h2 className="text-lg"> 3. Utilisation</h2>
            <p className="text-zinc-400">
              {" "}
              Motivix est conçu pour être un outil d'aide à la rédaction de
              lettres de motivation. En utilisant Motivix, l'utilisateur accepte
              que les résultats ne sont pas garantis et que les données fournies
              peuvent être imprécises ou ne pas correspondre entièrement à ses
              attentes. L'utilisateur est invité à relire la lettre de
              motivation et à apporter des retouches avant de l'envoyer à un
              tiers.{" "}
            </p>

            <h2 className="text-lg"> 4. Responsabilité</h2>
            <p className="text-zinc-400">
              {" "}
              L'utilisateur est seul responsable de l'utilisation qu'il fait de
              Motivix et des conséquences résultant de celle-ci. Le créateur ne
              sera pas tenu responsable des dommages causés par l'utilisation de
              Motivix.{" "}
            </p>

            <h2 className="text-lg"> 5. Modifications</h2>
            <p className="text-zinc-400">
              {" "}
              Le créateur se réserve le droit d'apporter des modifications à
              Motivix et aux présentes conditions générales à tout moment et
              sans préavis.{" "}
            </p>
          </div>
        </div>
      </div>

      <Footer/>
   
    </div>
  );
}
