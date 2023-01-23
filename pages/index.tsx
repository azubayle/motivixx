import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [work, setWork] = useState("");
  const [xp, setXp] = useState("");
  const [school, setSchool] = useState("");
  const [infosSupp, setInfosSupp] = useState("");
  const [domaine, setDomaine] = useState("");
  const [entrepriseNom, setEntrepriseNom] = useState("");
  const [stillInSchool, setStillInSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [stage, setStage] = useState("Oui");
  const [jours, setJours] = useState("");

  const [qualities, setQualities] = useState([
    { id: 1, title: "Rigoureux", active: false },
    { id: 2, title: "Autonome", active: false },
    { id: 3, title: "Dynamique", active: false },
    { id: 4, title: "Motivé", active: false },
    { id: 5, title: "Créatif", active: false },
    { id: 6, title: "Passioné", active: false },
    { id: 7, title: "Réactif", active: false },
    { id: 8, title: "Persuasif", active: false },
    { id: 9, title: "Sens du service", active: false },
    { id: 10, title: `Capacité d'adaptations`, active: false },
    { id: 11, title: "Ponctuel", active: false },
    { id: 13, title: "Polyvalent", active: false },
    { id: 14, title: "Organisé", active: false },
    { id: 15, title: "Curieux", active: false },
    { id: 16, title: "Pro-actif", active: false },
    { id: 17, title: "Impliqué", active: false },
    { id: 18, title: "Enthousiaste", active: false },
  ]);
  const [selectedQualities, setSelectedQualities] = useState("");

  const [generatedBios, setGeneratedBios] = useState<String>("");

  const prompt = `Génère une lettre de motivation percutante, impactante et efficace dans 
  un langage formel entre 250 et 400 mots MAXIMUM (c'est important) la lettre s'adresse à ${entrepriseNom} 
  qui est dans ce domaine ${domaine}. Voici les informations à mettre dans la lettre : 
  je m'appelle ${name} et je postule pour : ${work}. ${
    stage == "Oui"
      ? 'Ecrit la lettre de motivation pour dire que je souhaite effectuer un stage dans l"entreprise'
      : ""
  }
  ${
    stage == "Oui" &&
    `Je souhaite effectuer un stage d'une durée de : ${jours} jours`
  }
  J'ai fais mon école à / au ${school}.
  ${
    stillInSchool == "Oui"
      ? "Je suis encore dans cette école"
      : "Je ne suis plus dans cette école"
  }
  Mes qualités sont  : ${qualities} (Ajoute maximum 3 qualités, pas plus, c'est très important !). 
  J'ai ${xp} années d'experience
  L'entreprise dans laquelle je souhaite postuler opère dans ce domaine de travail ${domaine}
  L'entreprise s'appelle ${entrepriseNom}
  Mes certificats et formations sont ${degree}
  Voici des informations supplémentaire si besoin : ${infosSupp}`;

  const generateBio = async (e: any) => {
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    console.log("Edge function returned.");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();

    let done = false;
    let tempState = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const newValue = decoder
        .decode(value)
        .replaceAll("data: ", "")
        .split("\n\n")
        .filter(Boolean);

      if (tempState) {
        newValue[0] = tempState + newValue[0];
        tempState = "";
      }

      newValue.forEach((newVal) => {
        if (newVal === "[DONE]") {
          return;
        }

        try {
          const json = JSON.parse(newVal) as {
            id: string;
            object: string;
            created: number;
            choices?: {
              text: string;
              index: number;
              logprobs: null;
              finish_reason: null | string;
            }[];
            model: string;
          };

          if (!json.choices?.length) {
            throw new Error("Something went wrong.");
          }

          const choice = json.choices[0];
          setGeneratedBios((prev) => prev + choice.text);
        } catch (error) {
          tempState = newVal;
        }
      });
    }

    setLoading(false);
  };

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Génère ta lettre de motivation facilement !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20 ">
        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
          href="https://github.com/azubayle/motivixx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>Github</p>
        </a>
        <h1 className="sm:text-6xl text-4xl max-w-3xl font-bold text-slate-900">
          Génère ta lettre de motivation facilement
          <span className="text-teal-400">.</span>
        </h1>
        <p className="text-slate-500 mt-5 lg:w-7/12 mx-auto">
          Salut, nous sommes ravis de vous présenter notre logiciel de rédaction
          de lettres de motivation basé sur l'intelligence artificielle. Notre
          logiciel est conçu pour vous aider à rédiger des lettres de motivation
          plus pertinentes et mieux adaptées à votre profil et à vos
          compétences.
        </p>
        <div className="max-w-3xl w-full">
          <div className="w-full flex mt-10 items-center space-x-3">
            <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
              1
            </div>
            <label
              htmlFor="name"
              className="text-left font-medium cursor-pointer"
            >
              Nom et prénom
            </label>
          </div>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
          ></input>
          <div className="w-full flex mt-10 items-center space-x-3">
            <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
              2
            </div>
            <label
              htmlFor="work"
              className="text-left font-medium cursor-pointer"
            >
              Emploi souhaité
            </label>
          </div>
          <input
            id="work"
            value={work}
            onChange={(e) => setWork(e.target.value)}
            className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
          ></input>

          <div className="w-full flex mt-10 items-center space-x-3">
            <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
              3
            </div>
            <label
              htmlFor="stage"
              className="text-left font-medium cursor-pointer"
            >
              Recherchez vous un stage ?
            </label>
          </div>

          <select
            id="stage"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
          >
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>

          {stage == "Oui" && (
            <div>
              <div className="w-full flex mt-10 items-center space-x-3">
                <label
                  htmlFor="jours"
                  className="italic text-left font-medium cursor-pointer"
                >
                  Durée souhaitée du stage (en jours)
                </label>
              </div>
              <input
                id="jours"
                value={jours}
                onChange={(e) => setJours(e.target.value)}
                className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
              ></input>
            </div>
          )}

          <div className="w-full flex mt-10 items-center space-x-3">
            <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
              4
            </div>
            <label
              htmlFor="xp"
              className="text-left font-medium cursor-pointer"
            >
              Années d'expérience dans le domaine
            </label>
          </div>
          <input
            id="xp"
            value={xp}
            onChange={(e) => setXp(e.target.value)}
            className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
          ></input>

          <div className="w-full flex mt-10 items-center space-x-3">
            <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
              5
            </div>
            <label
              htmlFor="school"
              className="text-left font-medium cursor-pointer"
            >
              Dernière école / école actuelle (précisez but de l'école)
            </label>
          </div>
          <input
            id="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
          ></input>

          <div className="w-full flex mt-10 items-center space-x-3">
            <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
              6
            </div>
            <label
              htmlFor="stillInSchool"
              className="text-left font-medium cursor-pointer"
            >
              Etes vous encore dans cette école ?
            </label>
          </div>
          <input
            id="stillInSchool"
            value={stillInSchool}
            onChange={(e) => setStillInSchool(e.target.value)}
            className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
          ></input>

          <div className="w-full flex mt-10 items-center space-x-3">
            <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
              7
            </div>
            <label
              htmlFor="degree"
              className="text-left font-medium cursor-pointer"
            >
              Certificats / Formations (Séparez avec une virgules si plusieurs)
            </label>
          </div>
          <input
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
          ></input>

          <div className="w-full flex mt-10 mb-5 items-center space-x-3">
            <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
              8
            </div>
            <label
              htmlFor="selectedQualities"
              className="text-left font-medium cursor-pointer"
            >
              Principales qualités (séparez avec une virgule)
            </label>
          </div>
          <input
            id="selectedQualities"
            value={selectedQualities}
            onChange={(e) => setSelectedQualities(e.target.value)}
            className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
          ></input>
          <div className="w-full flex mt-10 items-center space-x-3">
            <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
              9
            </div>
            <label
              htmlFor="nomEntreprise"
              className="text-left font-medium cursor-pointer"
            >
              Nom de l'entreprise
            </label>
          </div>
          <input
            id="nomEntreprise"
            value={entrepriseNom}
            onChange={(e) => setEntrepriseNom(e.target.value)}
            className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
          ></input>
          <div className="w-full flex mt-10 items-center space-x-3">
            <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
              10
            </div>
            <label
              htmlFor="domaine"
              className="text-left font-medium cursor-pointer"
            >
              Domaine de travail de l'entreprise
            </label>
          </div>
          <input
            id="domaine"
            value={domaine}
            onChange={(e) => setDomaine(e.target.value)}
            className="outline-none w-full rounded-md border border-gray-400 p-3 shadow-sm focus:border-teal-400 focus:ring-black my-5"
          ></input>

          <div className="w-full flex mt-10 items-center space-x-3">
            <div className="text-base bg-black flex items-center justify-center rounded-full h-8 w-8 text-white">
              11
            </div>
            <label
              htmlFor="infosSupp"
              className="text-left font-medium cursor-pointer"
            >
              Informations supplémentaire
            </label>
          </div>
          <input
            id="infosSupp"
            value={infosSupp}
            onChange={(e) => setInfosSupp(e.target.value)}
            className="outline-none w-full rounded-md border border-gray-400 px-3 pt-3 pb-10 shadow-sm focus:border-teal-400 focus:ring-black my-5"
            placeholder="Rentrez des informations supplémentaire ici que vous juger nécessaire. (Facultatif)"
          />

          {!loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-teal-500 transition w-full"
              onClick={(e) => generateBio(e)}
            >
              Génère ta lettre !
            </button>
          )}
          {loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="space-y-10 my-10">
              {generatedBios && !loading && (
                <>
                  <div>
                    <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto">
                      Votre lettre de motivation
                    </h2>
                  </div>
                  <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                    {generatedBios && (
                      <div
                        className="w-full bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            generatedBios as string
                          );
                          toast("Lettre de motivation copiée ", {
                            icon: "✂️",
                          });
                        }}
                        key={generatedBios as string}
                      >
                        <pre className="whitespace-pre-line text-sm text-left leading-5">
                          {generatedBios}
                        </pre>
                      </div>
                    )}
                    <p className="italic text-slate-500 font-sm text-center mt-3">
                      Attention ! Les données fournies peuvent être imprécises
                      ou ne pas correspondre entièrement à vos attentes. Les
                      données étant générées par une intelligence artificielle
                      encore en phase d'apprentissage, nous vous encourageons à
                      relire la lettre de motivation et à apporter des
                      modifications si nécessaire avant de l'envoyer à un tiers. De plus, nous vons conseillons d'utiliser le résultat comme une base et d'apporter des modifications par la suite !
                    </p>
                    <p className=" text-slate-600">
                      Pour toutes questions ou réclamations, me contacter{" "}
                      <a
                        href="mailto:justincappelle@outlook.com"
                        className="underline "
                      >
                        ici
                      </a>
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
