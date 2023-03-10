import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Home: NextPage = () => {
  const ResizablePanel = dynamic(() => import("../components/ResizablePanel"));
  const LoadingDots = dynamic(() => import("../components/LoadingDots"));
  const Header = dynamic(() => import("../components/Header"));
  const Footer = dynamic(() => import("../components/Footer"));
  const Github = dynamic(() => import("../components/GitHub"));

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
    <div className="flex flex-col items-center justify-center max-w-6xl min-h-screen py-2 mx-auto">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-12 text-center sm:mt-20 ">
        <a
          className="flex items-center justify-center px-4 py-2 mb-5 space-x-2 text-sm text-gray-600 transition-colors bg-white border border-gray-300 rounded-full shadow-md max-w-fit hover:bg-gray-100"
          href="https://github.com/azubayle/motivixx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>Github</p>
        </a>
        <h1 className="max-w-3xl text-4xl font-bold sm:text-6xl text-slate-900">
          Génère ta lettre de motivation facilement
          <span className="text-teal-400">.</span>
        </h1>
        <p className="mx-auto mt-5 text-slate-500 lg:w-7/12">
          Salut, nous sommes ravis de vous présenter notre logiciel de rédaction
          de lettres de motivation basé sur l'intelligence artificielle. Notre
          logiciel est conçu pour vous aider à rédiger des lettres de motivation
          plus pertinentes et mieux adaptées à votre profil et à vos
          compétences.
        </p>
        <div className="w-full max-w-3xl">
          <div className="flex items-center w-full mt-10 space-x-3">
            <div className="flex items-center justify-center w-8 h-8 text-base text-white bg-black rounded-full">
              1
            </div>
            <label
              htmlFor="name"
              className="font-medium text-left cursor-pointer"
            >
              Nom et prénom
            </label>
          </div>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
          ></input>
          <div className="flex items-center w-full mt-10 space-x-3">
            <div className="flex items-center justify-center w-8 h-8 text-base text-white bg-black rounded-full">
              2
            </div>
            <label
              htmlFor="work"
              className="font-medium text-left cursor-pointer"
            >
              Emploi souhaité
            </label>
          </div>
          <input
            id="work"
            value={work}
            onChange={(e) => setWork(e.target.value)}
            className="w-full p-3 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
          ></input>

          <div className="flex items-center w-full mt-10 space-x-3">
            <div className="flex items-center justify-center w-8 h-8 text-base text-white bg-black rounded-full">
              3
            </div>
            <label
              htmlFor="stage"
              className="font-medium text-left cursor-pointer"
            >
              Recherchez vous un stage ?
            </label>
          </div>

          <select
            id="stage"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="w-full p-3 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
          >
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>

          {stage == "Oui" && (
            <div>
              <div className="flex items-center w-full mt-10 space-x-3">
                <label
                  htmlFor="jours"
                  className="italic font-medium text-left cursor-pointer"
                >
                  Durée souhaitée du stage (en jours)
                </label>
              </div>
              <input
                id="jours"
                value={jours}
                onChange={(e) => setJours(e.target.value)}
                className="w-full p-3 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
              ></input>
            </div>
          )}

          <div className="flex items-center w-full mt-10 space-x-3">
            <div className="flex items-center justify-center w-8 h-8 text-base text-white bg-black rounded-full">
              4
            </div>
            <label
              htmlFor="xp"
              className="font-medium text-left cursor-pointer"
            >
              Années d'expérience dans le domaine
            </label>
          </div>
          <input
            id="xp"
            value={xp}
            onChange={(e) => setXp(e.target.value)}
            className="w-full p-3 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
          ></input>

          <div className="flex items-center w-full mt-10 space-x-3">
            <div className="flex items-center justify-center w-8 h-8 text-base text-white bg-black rounded-full">
              5
            </div>
            <label
              htmlFor="school"
              className="font-medium text-left cursor-pointer"
            >
              Dernière école / école actuelle (précisez but de l'école)
            </label>
          </div>
          <input
            id="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="w-full p-3 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
          ></input>

          <div className="flex items-center w-full mt-10 space-x-3">
            <div className="flex items-center justify-center w-8 h-8 text-base text-white bg-black rounded-full">
              6
            </div>
            <label
              htmlFor="stillInSchool"
              className="font-medium text-left cursor-pointer"
            >
              Etes vous encore dans cette école ?
            </label>
          </div>
          <input
            id="stillInSchool"
            value={stillInSchool}
            onChange={(e) => setStillInSchool(e.target.value)}
            className="w-full p-3 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
          ></input>

          <div className="flex items-center w-full mt-10 space-x-3">
            <div className="flex items-center justify-center w-8 h-8 text-base text-white bg-black rounded-full">
              7
            </div>
            <label
              htmlFor="degree"
              className="font-medium text-left cursor-pointer"
            >
              Certificats / Formations (Séparez avec une virgules si plusieurs)
            </label>
          </div>
          <input
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="w-full p-3 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
          ></input>

          <div className="flex items-center w-full mt-10 mb-5 space-x-3">
            <div className="flex items-center justify-center w-8 h-8 text-base text-white bg-black rounded-full">
              8
            </div>
            <label
              htmlFor="selectedQualities"
              className="font-medium text-left cursor-pointer"
            >
              Principales qualités (séparez avec une virgule)
            </label>
          </div>
          <input
            id="selectedQualities"
            value={selectedQualities}
            onChange={(e) => setSelectedQualities(e.target.value)}
            className="w-full p-3 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
          ></input>
          <div className="flex items-center w-full mt-10 space-x-3">
            <div className="flex items-center justify-center w-8 h-8 text-base text-white bg-black rounded-full">
              9
            </div>
            <label
              htmlFor="nomEntreprise"
              className="font-medium text-left cursor-pointer"
            >
              Nom de l'entreprise
            </label>
          </div>
          <input
            id="nomEntreprise"
            value={entrepriseNom}
            onChange={(e) => setEntrepriseNom(e.target.value)}
            className="w-full p-3 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
          ></input>
          <div className="flex items-center w-full mt-10 space-x-3">
            <div className="flex items-center justify-center w-8 h-8 text-base text-white bg-black rounded-full">
              10
            </div>
            <label
              htmlFor="domaine"
              className="font-medium text-left cursor-pointer"
            >
              Domaine de travail de l'entreprise
            </label>
          </div>
          <input
            id="domaine"
            value={domaine}
            onChange={(e) => setDomaine(e.target.value)}
            className="w-full p-3 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
          ></input>

          <div className="flex items-center w-full mt-10 space-x-3">
            <div className="flex items-center justify-center w-8 h-8 text-base text-white bg-black rounded-full">
              11
            </div>
            <label
              htmlFor="infosSupp"
              className="font-medium text-left cursor-pointer"
            >
              Informations supplémentaire
            </label>
          </div>
          <input
            id="infosSupp"
            value={infosSupp}
            onChange={(e) => setInfosSupp(e.target.value)}
            className="w-full px-3 pt-3 pb-10 my-5 border border-gray-400 rounded-md shadow-sm outline-none focus:border-teal-400 focus:ring-black"
            placeholder="Rentrez des informations supplémentaire ici que vous juger nécessaire. (Facultatif)"
          />

          {!loading && (
            <button
              className="w-full px-4 py-3 mt-8 font-medium text-white transition bg-black rounded-xl sm:mt-10 hover:bg-teal-500"
              onClick={(e) => generateBio(e)}
            >
              Génère ta lettre !
            </button>
          )}
          {loading && (
            <button
              className="w-full px-4 py-2 mt-8 font-medium text-white bg-black rounded-xl sm:mt-10 hover:bg-black/80"
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
            <motion.div className="my-10 space-y-10">
              {generatedBios && !loading && (
                <>
                  <div>
                    <h2 className="mx-auto text-3xl font-bold sm:text-4xl text-slate-900">
                      Votre lettre de motivation
                    </h2>
                  </div>
                  <div className="flex flex-col items-center justify-center max-w-xl mx-auto space-y-8">
                    {generatedBios && (
                      <div
                        className="w-full p-4 transition bg-white border shadow-md rounded-xl hover:bg-gray-100 cursor-copy"
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
                        <pre className="text-sm leading-5 text-left whitespace-pre-line">
                          {generatedBios}
                        </pre>
                      </div>
                    )}
                    <p className="mt-3 italic text-center text-slate-500 font-sm">
                      Attention ! Les données fournies peuvent être imprécises
                      ou ne pas correspondre entièrement à vos attentes. Les
                      données étant générées par une intelligence artificielle
                      encore en phase d'apprentissage, nous vous encourageons à
                      relire la lettre de motivation et à apporter des
                      modifications si nécessaire avant de l'envoyer à un tiers.
                      De plus, nous vons conseillons d'utiliser le résultat
                      comme une base et d'apporter des modifications par la
                      suite !
                    </p>
                    <p className=" text-zinc-300">
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
