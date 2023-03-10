export default function Login(){

    return(
        <div className="flex items-center w-full h-screen ">

                <div className="w-6/12 h-screen bg-gradient-to-r from-slate-800 to-slate-900 bg-slate-600"></div>

                <div className="flex items-center justify-center w-6/12">

                    <div className="w-6/12">
                        <form className="w-full px-10 py-12 border rounded shadow-md border-slate-100">
                            <h1 className="mb-2 text-3xl font-semibold text-zinc-800">Se connecter<span className="text-teal-400">.</span> </h1>
                            <input type="text" className="w-full px-2 py-3 my-1 border rounded outline-none border-slate-300 placeholder:text-slate-400 text-slate-700 focus:ring-0 focus:border-teal-400" placeholder="Adresse e-mail" />
                            <input type="text" className="w-full px-2 py-3 my-1 border rounded outline-none border-slate-300 placeholder:text-slate-400 text-slate-700 focus:ring-0 focus:border-teal-400" placeholder="Mot de passe" />
                            <button className="w-full px-6 py-2 mt-2 font-semibold text-white rounded-lg focus:bg-zinc-800 bg-zinc-900">S'inscrire</button>
                            <button className="w-full px-6 py-1 mt-1 font-semibold rounded-lg text-zinc-600">Créer un compte</button>
                        </form>

                    </div>

                </div>
            
        </div>
    )

}