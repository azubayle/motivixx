import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b py-10 flex justify-between items-center w-full flex-wrap space-y-3 sm:space-y-0 sm:flex-nowrap">
      <div className="w-full sm:w-none sm:px-10 flex justify-start">
        <Link href="/" className="flex space-x-3 ">
          <div className="flex items-center gap-0.5 mx-auto justify-center ">

            <h1 className="text-xl font-bold ml-2 tracking-tight w-full  ">
              {" "}
              Motivix
            </h1>
          </div>
        </Link>
      </div>
      <div className="w-full sm:w-none sm:px-10 flex justify-end">
        <Link
          href="/"
          className="flex space-x-3  text-sm text-teal-400 underline"
        >
          Créateur
        </Link>
      </div>
    </header>
  );
}
