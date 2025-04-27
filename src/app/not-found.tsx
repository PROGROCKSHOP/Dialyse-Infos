import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400">404</h1>
      <h2 className="text-2xl font-semibold mt-4 mb-6 text-center">Page non trouvée</h2>

      <p className="text-zinc-600 dark:text-zinc-400 text-center max-w-md mb-8">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/">
            Retour à l'accueil
          </Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/ressources">
            Consulter nos ressources
          </Link>
        </Button>
      </div>

      <div className="mt-12 text-center">
        <h3 className="font-medium text-lg mb-4">Pages populaires</h3>
        <ul className="space-y-2 text-blue-600 dark:text-blue-400">
          <li>
            <Link href="/dialyse" className="hover:underline">
              Comprendre la dialyse
            </Link>
          </li>
          <li>
            <Link href="/types" className="hover:underline">
              Types de dialyse
            </Link>
          </li>
          <li>
            <Link href="/vivre-avec" className="hover:underline">
              Vivre avec la dialyse
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:underline">
              Questions fréquentes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
