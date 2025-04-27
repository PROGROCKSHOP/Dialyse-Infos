import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Comprendre la dialyse - Info Dialyse",
  description: "Qu'est-ce que la dialyse, comment fonctionne-t-elle et quand est-elle nécessaire ? Informations pour les patients et leurs proches.",
};

export default function DialysePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 dark:bg-blue-950 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Comprendre la dialyse
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              Tout ce que vous devez savoir sur ce traitement essentiel
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert prose-blue max-w-none">
              <h2>Qu'est-ce que la dialyse ?</h2>
              <p>
                La <strong>dialyse</strong> est un traitement médical qui remplace partiellement les fonctions des reins lorsqu'ils ne
                sont plus en mesure d'assurer correctement leur rôle. Elle permet d'éliminer les déchets et l'excès
                d'eau du sang, deux fonctions normalement assurées par des reins sains.
              </p>

              <div className="my-8 flex justify-center">
                <div className="relative w-full max-w-lg aspect-[4/3] rounded overflow-hidden">
                  <Image
                    src="/images/hemodialyse-schema.png"
                    alt="Schéma explicatif du processus d'hémodialyse"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <p>
                Ce traitement est vital pour les personnes atteintes d'insuffisance rénale avancée
                ou d'insuffisance rénale terminale, lorsque les reins fonctionnent à moins de 15%
                de leur capacité normale.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-8">
                <h3 className="text-blue-700 dark:text-blue-400 mb-2">Les reins : des organes essentiels</h3>
                <p className="mb-0">
                  Les reins jouent plusieurs rôles vitaux dans notre organisme :
                </p>
                <ul>
                  <li>Filtration du sang et élimination des déchets</li>
                  <li>Régulation des minéraux (potassium, sodium, calcium...)</li>
                  <li>Maintien de l'équilibre hydrique</li>
                  <li>Production d'hormones importantes</li>
                  <li>Régulation de la tension artérielle</li>
                </ul>
              </div>

              <h2>Comment fonctionne la dialyse ?</h2>
              <p>
                Le principe de base de la dialyse est de faire passer le sang à travers une membrane semi-perméable
                qui retient les molécules de grande taille (protéines, cellules sanguines) tout en laissant passer
                les petites molécules (déchets, excès d'eau et électrolytes).
              </p>

              <p>
                Il existe deux principales méthodes de dialyse :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4">
                    <h3 className="text-blue-700 dark:text-blue-400 m-0">1. L'hémodialyse</h3>
                  </div>
                  <div className="p-4">
                    <p className="mt-0 mb-4">
                      Dans l'hémodialyse, le sang est filtré à travers une machine appelée "dialyseur" ou "rein artificiel".
                      Le sang est prélevé du corps, filtré dans la machine, puis renvoyé dans le corps.
                    </p>
                    <div className="relative w-full aspect-square mb-4">
                      <Image
                        src="/images/hemodialyse-schema.png"
                        alt="Schéma d'hémodialyse"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Généralement effectuée trois fois par semaine, pendant environ 4 heures par session.
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4">
                    <h3 className="text-emerald-700 dark:text-emerald-400 m-0">2. La dialyse péritonéale</h3>
                  </div>
                  <div className="p-4">
                    <p className="mt-0 mb-4">
                      Dans la dialyse péritonéale, le péritoine (membrane naturelle tapissant l'abdomen) est utilisé comme filtre.
                      Un liquide spécial est introduit dans la cavité abdominale par un cathéter.
                    </p>
                    <div className="relative w-full aspect-square mb-4">
                      <Image
                        src="/images/dialyse-peritoneale.jpg"
                        alt="Schéma de dialyse péritonéale"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Généralement effectuée quotidiennement, à domicile, par le patient lui-même.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center my-8">
                <Link href="/types">
                  <Button>
                    En savoir plus sur les types de dialyse
                  </Button>
                </Link>
              </div>

              <h2>Quand la dialyse est-elle nécessaire ?</h2>
              <p>
                La dialyse devient nécessaire lorsque les reins ne fonctionnent plus suffisamment pour maintenir la vie,
                généralement lorsqu'ils ne fonctionnent plus qu'à environ 10-15% de leur capacité normale. Cette condition
                est appelée insuffisance rénale terminale (IRT).
              </p>

              <p>
                Les signes indiquant que la dialyse pourrait être nécessaire incluent :
              </p>
              <ul>
                <li>Taux élevés de déchets (urée, créatinine) dans le sang</li>
                <li>Déséquilibres électrolytiques graves</li>
                <li>Rétention excessive de liquide (œdème)</li>
                <li>Hypertension incontrôlable</li>
                <li>Symptômes d'urémie (nausées, fatigue, confusion, etc.)</li>
              </ul>

              <p>
                La décision de commencer la dialyse est prise par le néphrologue (médecin spécialiste des reins)
                en concertation avec le patient, en tenant compte de son état clinique et des analyses sanguines.
              </p>

              <h2>La dialyse et la greffe de rein</h2>
              <p>
                Si la dialyse permet de remplacer une partie des fonctions rénales, la transplantation rénale est considérée
                comme le traitement optimal de l'insuffisance rénale terminale. Elle permet généralement une meilleure qualité
                de vie et une plus grande liberté. Cependant, tous les patients ne sont pas éligibles à la greffe, et l'attente
                d'un donneur compatible peut être longue.
              </p>

              <p>
                La dialyse est donc souvent un traitement transitoire en attendant une greffe, mais peut aussi être un traitement
                à long terme pour les personnes qui ne peuvent pas bénéficier d'une transplantation.
              </p>

              <div className="my-8 bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Important à savoir</h3>
                <p className="mb-0">
                  La dialyse est un traitement qui sauve des vies, mais elle ne remplace pas complètement toutes les fonctions des reins.
                  C'est pourquoi un suivi médical régulier, une alimentation adaptée et parfois des médicaments complémentaires
                  sont essentiels pour maintenir une bonne santé pendant ce traitement.
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild>
                <Link href="/types">
                  Découvrir les types de dialyse
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
