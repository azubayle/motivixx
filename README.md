# Motivix - Génère ta lettre de motivation facilement

Motivix est un logiciel utilisant l'IA afin de vous aider à générer des lettres de motivation facilement et rapideemnt !

https://motivix.vercel.app

## Comment ca marche ?

Les techologies principales utilisées sont [GPT-3 de OpenAI](https://openai.com/api/) pour générer le contenu et [Vercel](vercel.com) pour l'hébergement du site web. En remplissant les champs du formulaire, cela construit un "prompt" et nous l'envoyons ensuite à l'API de GPT-3 qui nous génère ensuite la lettre de modifications. 

## Run le projet en local

Si vous souhaitez tester le site web en local, télécharger le dans votre environnement puis installer les dépendances (NPM INSTALL). Ensuite créé un fichier `.env.local` et remplissez le avec cette ligne de code : OPENAI_API_KEY=VOTRECLEFAPI .

Lancez ensuite votre application avec `npm run dev` et vous pourrez accéder à votre site ici : `http://localhost:3000`.
