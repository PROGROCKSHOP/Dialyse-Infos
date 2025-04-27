import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Types de dialyse - Info Dialyse",
  description: "Découvrez les différents types de dialyse : hémodialyse, dialyse péritonéale et leurs variantes. Informations sur le fonctionnement et les avantages de chaque méthode.",
};

export default function TypesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 dark:bg-blue-950 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Les différents types de dialyse
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              Comprendre les options de traitement disponibles
            </p>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-3 bg-blue-600" />
              <CardHeader>
                <CardTitle className="text-2xl">Hémodialyse</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 relative w-full aspect-video">
                  <Image
                    src="/images/hemodialyse-schema.png"
                    alt="Schéma d'hémodialyse"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <p className="mb-4">
                  Méthode de filtration du sang à travers un "rein artificiel". Le sang est
                  retiré du corps, nettoyé à travers un filtre spécial, puis retourné dans
                  le corps.
                </p>
                <Button asChild variant="outline">
                  <a href="#hemodialyse">En savoir plus</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-3 bg-emerald-600" />
              <CardHeader>
                <CardTitle className="text-2xl">Dialyse Péritonéale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 relative w-full aspect-video">
                  <Image
                    src="/images/dialyse-peritoneale.jpg"
                    alt="Schéma de dialyse péritonéale"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <p className="mb-4">
                  Utilise le péritoine (membrane qui tapisse l'abdomen) comme filtre naturel. Un liquide
                  spécial est introduit dans l'abdomen pour recueillir les déchets.
                </p>
                <Button asChild variant="outline">
                  <a href="#peritoneale">En savoir plus</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert prose-blue max-w-none">
              <h2 id="hemodialyse" className="scroll-mt-20">L'hémodialyse</h2>

              <div className="my-8 flex justify-center">
                <div className="relative w-full max-w-lg h-64 rounded overflow-hidden">
                  <Image
                    src="/images/hemodialyse-schema.png"
                    alt="Schéma explicatif du processus d'hémodialyse"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <p>
                L'hémodialyse est le type de dialyse le plus courant. Elle utilise une machine appelée
                <strong> dialyseur</strong> (ou "rein artificiel") pour filtrer le sang. Ce procédé nécessite un accès vasculaire
                permettant de prélever et de réinjecter le sang dans l'organisme.
              </p>

              <h3>Comment se déroule une séance d'hémodialyse ?</h3>

              <ol>
                <li>Le sang est prélevé à travers un accès vasculaire (fistule artério-veineuse, cathéter, etc.)</li>
                <li>Il est envoyé vers le dialyseur qui contient des milliers de fibres creuses microscopiques</li>
                <li>Ces fibres servent de membrane semi-perméable, laissant passer les déchets et l'eau en excès</li>
                <li>Le sang filtré est ensuite renvoyé dans le corps</li>
                <li>Ce processus se répète continuellement pendant toute la durée de la séance</li>
              </ol>

              <h3>Fréquence et durée :</h3>
              <p>
                Généralement 3 sessions par semaine, chacune durant de 3 à 5 heures. Le calendrier exact
                est déterminé par le néphrologue en fonction des besoins individuels du patient.
              </p>

              <h3>Les différentes modalités d'hémodialyse</h3>

              <h4>En fonction du lieu :</h4>
              <ul>
                <li>
                  <strong>Hémodialyse en centre :</strong> Réalisée dans un établissement médical spécialisé,
                  sous surveillance constante d'une équipe médicale. C'est l'option la plus courante.
                </li>
                <li>
                  <strong>Hémodialyse à domicile :</strong> Pour les patients formés et leurs aidants. Offre
                  plus de flexibilité mais nécessite un apprentissage approfondi et un espace dédié à domicile.
                </li>
                <li>
                  <strong>Unité d'autodialyse :</strong> Structure intermédiaire où les patients plus autonomes
                  réalisent leur dialyse avec une surveillance médicale réduite.
                </li>
              </ul>

              <h4>En fonction de la technique :</h4>
              <ul>
                <li>
                  <strong>Hémodialyse conventionnelle :</strong> 3-4 heures, 3 fois par semaine.
                </li>
                <li>
                  <strong>Hémodialyse quotidienne :</strong> Sessions plus courtes (2-3h) mais plus fréquentes (5-6 fois/semaine).
                  Peut améliorer la qualité de vie en réduisant les variations de l'état général entre les séances.
                </li>
                <li>
                  <strong>Hémodialyse nocturne :</strong> Longues sessions (6-8h) réalisées pendant le sommeil,
                  généralement 3 fois par semaine ou plus. Permet une épuration plus douce et efficace.
                </li>
                <li>
                  <strong>Hémodiafiltration :</strong> Combine les principes de l'hémodialyse et de l'hémofiltration
                  pour une meilleure élimination de certaines toxines.
                </li>
              </ul>

              <h3>Avantages de l'hémodialyse</h3>
              <ul>
                <li>Épuration efficace des déchets et des toxines</li>
                <li>Surveillance médicale directe (en centre)</li>
                <li>Traitement intermittent (jours sans dialyse)</li>
                <li>Pas de manipulation quotidienne par le patient</li>
              </ul>

              <h3>Inconvénients de l'hémodialyse</h3>
              <ul>
                <li>Déplacements fréquents vers le centre de dialyse</li>
                <li>Contraintes horaires importantes</li>
                <li>Fluctuations physiologiques entre les séances</li>
                <li>Risques liés à l'accès vasculaire (infections, thromboses)</li>
                <li>Restrictions alimentaires et hydriques plus strictes</li>
              </ul>

              <div className="my-8 bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                <h4 className="text-blue-700 dark:text-blue-400 mb-2">L'accès vasculaire</h4>
                <p>
                  Pour réaliser l'hémodialyse, un <strong>accès vasculaire</strong> est nécessaire. Il en existe plusieurs types :
                </p>
                <ul className="mb-0">
                  <li>
                    <strong>Fistule artério-veineuse (FAV) :</strong> Connexion chirurgicale entre une artère et une veine,
                    généralement au niveau du bras. C'est l'accès de choix, le plus durable et avec le moins de complications.
                  </li>
                  <li>
                    <strong>Cathéter veineux central :</strong> Tube inséré dans une grosse veine (jugulaire, sous-clavière, fémorale).
                    Généralement utilisé temporairement ou en urgence.
                  </li>
                  <li>
                    <strong>Prothèse vasculaire :</strong> Tube synthétique implanté sous la peau, reliant une artère à une veine.
                    Alternative lorsque la création d'une FAV n'est pas possible.
                  </li>
                </ul>
              </div>

              <h2 id="peritoneale" className="scroll-mt-20">La dialyse péritonéale</h2>

              <div className="my-8 flex justify-center">
                <div className="relative w-full max-w-lg h-64 rounded overflow-hidden">
                  <Image
                    src="/images/dialyse-peritoneale.jpg"
                    alt="Schéma explicatif de la dialyse péritonéale"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <p>
                La dialyse péritonéale utilise le <strong>péritoine</strong>, une membrane naturelle qui tapisse la cavité
                abdominale, comme filtre. Cette membrane est semi-perméable et permet l'échange entre le sang et le liquide
                de dialyse (dialysat).
              </p>

              <h3>Comment fonctionne la dialyse péritonéale ?</h3>
              <ol>
                <li>Un cathéter permanent est implanté chirurgicalement dans l'abdomen</li>
                <li>Le liquide de dialyse est introduit dans la cavité péritonéale à travers ce cathéter</li>
                <li>Les déchets et l'excès d'eau passent du sang vers le liquide par diffusion et osmose</li>
                <li>Après un temps de stagnation prédéfini, le liquide chargé de déchets est drainé</li>
                <li>Du liquide frais est introduit et le cycle recommence</li>
              </ol>

              <h3>Les différentes modalités de dialyse péritonéale</h3>

              <h4>Dialyse Péritonéale Continue Ambulatoire (DPCA)</h4>
              <ul>
                <li>Processus manuel, sans machine</li>
                <li>Généralement 3-4 échanges par jour</li>
                <li>Chaque échange dure environ 30-40 minutes</li>
                <li>Le liquide reste dans l'abdomen pendant 4-8 heures entre les échanges</li>
                <li>Peut être réalisée n'importe où dans des conditions propres</li>
              </ul>

              <h4>Dialyse Péritonéale Automatisée (DPA)</h4>
              <ul>
                <li>Utilise une machine (cycleur) qui effectue automatiquement les échanges</li>
                <li>Généralement réalisée pendant la nuit, durant le sommeil</li>
                <li>3-5 échanges sur une période de 8-10 heures</li>
                <li>Parfois complétée par un échange diurne</li>
                <li>Offre plus de liberté pendant la journée</li>
              </ul>

              <h3>Avantages de la dialyse péritonéale</h3>
              <ul>
                <li>Traitement à domicile, plus grande autonomie</li>
                <li>Pas besoin de déplacements fréquents à l'hôpital</li>
                <li>Flexibilité dans l'horaire des échanges (surtout pour la DPCA)</li>
                <li>Filtration continue ou plus régulière, moins de fluctuations physiologiques</li>
                <li>Préservation plus longue de la fonction rénale résiduelle</li>
                <li>Restrictions alimentaires et hydriques généralement moins strictes</li>
                <li>Pas d'accès vasculaire nécessaire</li>
              </ul>

              <h3>Inconvénients de la dialyse péritonéale</h3>
              <ul>
                <li>Risque d'infection du péritoine (péritonite)</li>
                <li>Présence permanente d'un cathéter abdominal</li>
                <li>Nécessite de l'espace pour stocker le matériel à domicile</li>
                <li>Peut affecter l'image corporelle (abdomen parfois distendu)</li>
                <li>Nécessite une implication personnelle quotidienne</li>
                <li>Difficultés potentielles pour les personnes à dextérité limitée</li>
              </ul>

              <div className="my-8 bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg">
                <h4 className="text-emerald-700 dark:text-emerald-400 mb-2">Le cathéter péritonéal</h4>
                <p className="mb-0">
                  Le cathéter est un tube flexible, généralement en silicone, dont une extrémité est placée dans la
                  cavité péritonéale et l'autre sort de l'abdomen. Il permet l'introduction et le drainage du
                  liquide de dialyse. Sa mise en place nécessite une petite intervention chirurgicale, généralement
                  réalisée sous anesthésie locale ou générale. Une fois cicatrisé, le site d'insertion du cathéter
                  nécessite des soins quotidiens pour prévenir les infections.
                </p>
              </div>

              <h2>Comment choisir entre les différents types de dialyse ?</h2>

              <p>
                Le choix entre hémodialyse et dialyse péritonéale dépend de nombreux facteurs, notamment :
              </p>

              <ul>
                <li>L'état de santé général du patient</li>
                <li>Les préférences personnelles et le mode de vie</li>
                <li>La capacité à réaliser soi-même le traitement</li>
                <li>La présence de soutien à domicile</li>
                <li>Les contre-indications médicales éventuelles</li>
                <li>La distance par rapport au centre de dialyse</li>
              </ul>

              <p>
                Il est important de discuter avec l'équipe médicale (néphrologue, infirmier(ère) spécialisé(e))
                des avantages et inconvénients de chaque méthode pour votre situation personnelle. Dans certains
                cas, un patient peut passer d'une méthode à l'autre au cours de son parcours de soins.
              </p>

              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg my-8">
                <h3 className="font-semibold text-lg mb-2">À retenir</h3>
                <p className="mb-0">
                  Il n'existe pas de méthode de dialyse "meilleure" qu'une autre dans l'absolu.
                  La meilleure méthode est celle qui convient le mieux à votre situation personnelle,
                  à votre mode de vie et à vos préférences, tout en assurant une épuration efficace.
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild>
                <Link href="/vivre-avec">
                  Découvrir comment vivre avec la dialyse
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
