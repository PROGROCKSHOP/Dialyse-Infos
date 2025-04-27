import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-50 dark:bg-blue-950 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-400">
                Comprendre et vivre avec la dialyse
              </h1>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                Bienvenue sur Info Dialyse, votre ressource complète pour mieux comprendre
                le traitement par dialyse et améliorer votre qualité de vie.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/dialyse">
                    Découvrir la dialyse
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md max-w-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-64 w-full text-blue-500"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Qu'est-ce que la dialyse ?
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              La dialyse est un traitement médical qui remplace certaines fonctions des reins
              lorsqu'ils ne fonctionnent plus correctement. Ce site est conçu pour vous aider
              à comprendre ce traitement et comment vivre pleinement malgré lui.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Types de dialyse</CardTitle>
                <CardDescription>Comprendre les différentes options</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Il existe principalement deux types de dialyse : l'hémodialyse et la dialyse péritonéale.
                  Chacune a ses avantages et son fonctionnement spécifique.
                </p>
                <Button asChild variant="outline">
                  <Link href="/types">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Vivre avec la dialyse</CardTitle>
                <CardDescription>Conseils pratiques au quotidien</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  La dialyse modifie votre quotidien, mais n'empêche pas de mener une vie épanouie.
                  Découvrez nos conseils sur l'alimentation, l'activité physique et plus encore.
                </p>
                <Button asChild variant="outline">
                  <Link href="/vivre-avec">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Questions fréquentes</CardTitle>
                <CardDescription>Réponses à vos interrogations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Vous avez des questions sur la dialyse ? Consultez notre FAQ qui répond
                  aux interrogations les plus courantes des patients et de leurs proches.
                </p>
                <Button asChild variant="outline">
                  <Link href="/faq">Consulter la FAQ</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Vous avez des questions sur la dialyse ?
            </h2>
            <p className="text-xl mb-8">
              Notre équipe est là pour vous aider et répondre à toutes vos interrogations.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Contactez-nous
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
