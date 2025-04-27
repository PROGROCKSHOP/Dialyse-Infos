import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Info Dialyse</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Site d'information sur la dialyse destiné aux patients et à leurs proches.
              Notre objectif est de fournir des informations claires et accessibles pour
              mieux comprendre et vivre avec ce traitement.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dialyse" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500">
                  Comprendre la dialyse
                </Link>
              </li>
              <li>
                <Link href="/types" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500">
                  Types de dialyse
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500">
                  Questions fréquentes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Contact</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Vous avez des questions? N'hésitez pas à nous contacter.
            </p>
            <Link
              href="/contact"
              className="text-sm text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Info Dialyse. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
