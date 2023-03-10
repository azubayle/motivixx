import Link from "next/link";

export default function Footer() {
  return (
<footer className="flex items-center justify-center gap-2 py-5 text-sm bg-zinc-900 border-zinc-800 border-y text-zinc-400">
        <p>Motivix V1.2 créé par Justin Cappelle</p>
        <Link className="underline" href="/CGu">
          CGU
        </Link>
        <Link className="underline" href="/CGu">
          RGPD
        </Link>
      </footer>
  );
}
