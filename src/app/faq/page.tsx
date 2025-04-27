import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ sur la dialyse - Info Dialyse",
  description: "Questions fréquemment posées sur la dialyse, ses traitements, et ses impacts sur la vie quotidienne. Réponses claires pour les patients et leurs proches.",
};

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 dark:bg-blue-950 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Questions fréquentes sur la dialyse
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                  Questions générales sur la dialyse
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q1">
                    <AccordionTrigger className="text-left">
                      Qu'est-ce que la dialyse exactement ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        La dialyse est un traitement médical qui remplace partiellement le rôle des reins
                        lorsqu'ils ne fonctionnent plus suffisamment. Elle permet d'éliminer les déchets et
                        l'excès d'eau du sang, ainsi que de maintenir l'équilibre des électrolytes dans
                        l'organisme. Il existe deux types principaux : l'hémodialyse et la dialyse péritonéale.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q2">
                    <AccordionTrigger className="text-left">
                      Combien de temps dure une séance de dialyse ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        Pour l'hémodialyse conventionnelle, une séance dure généralement entre 3 et 5 heures,
                        trois fois par semaine. La durée exacte dépend de plusieurs facteurs : votre taille,
                        votre poids, votre état de santé général et l'efficacité de votre accès vasculaire.
                        Pour la dialyse péritonéale, les échanges sont plus fréquents (quotidiens) mais
                        peuvent s'intégrer plus facilement dans votre vie quotidienne.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q3">
                    <AccordionTrigger className="text-left">
                      La dialyse est-elle douloureuse ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        La dialyse elle-même n'est généralement pas douloureuse. En hémodialyse, l'insertion des
                        aiguilles dans la fistule peut causer un inconfort momentané, mais la plupart des patients
                        s'y habituent. Des anesthésiants locaux peuvent être appliqués pour minimiser cette gêne.
                        En dialyse péritonéale, les échanges ne sont pas douloureux une fois le cathéter cicatrisé.
                        Si vous ressentez de la douleur pendant le traitement, signalez-le immédiatement à l'équipe
                        soignante, car cela pourrait indiquer un problème qui nécessite attention.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q4">
                    <AccordionTrigger className="text-left">
                      Peut-on arrêter la dialyse une fois qu'on l'a commencée ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        Dans la plupart des cas, la dialyse est un traitement à vie, à moins de bénéficier d'une
                        transplantation rénale réussie. L'arrêt de la dialyse entraînerait l'accumulation de déchets
                        et de liquides dans l'organisme, ce qui peut être fatal. Cependant, il existe de rares cas où
                        une récupération partielle de la fonction rénale peut permettre une réduction de l'intensité
                        de la dialyse, voire son arrêt temporaire, sous stricte surveillance médicale. Ces situations
                        sont exceptionnelles et dépendent entièrement de l'état clinique du patient.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                  Questions sur le traitement
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q5">
                    <AccordionTrigger className="text-left">
                      Comment choisir entre hémodialyse et dialyse péritonéale ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        Le choix entre ces deux méthodes dépend de plusieurs facteurs : votre état de santé général,
                        vos préférences personnelles, votre mode de vie, votre autonomie et vos conditions de vie.
                        L'hémodialyse peut être préférable si vous préférez un traitement sous supervision médicale
                        quelques fois par semaine. La dialyse péritonéale peut mieux convenir si vous souhaitez plus
                        d'indépendance, être actif professionnellement ou si vous avez des difficultés d'accès vasculaire.
                        Cette décision importante doit être prise après discussion approfondie avec votre néphrologue,
                        qui vous expliquera les avantages et inconvénients de chaque méthode dans votre situation particulière.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q6">
                    <AccordionTrigger className="text-left">
                      Est-il possible de voyager quand on est sous dialyse ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        Oui, il est tout à fait possible de voyager lorsqu'on est sous dialyse, mais cela nécessite une
                        planification préalable. Pour l'hémodialyse, vous devrez identifier un centre d'accueil à votre
                        destination et réserver vos séances à l'avance (idéalement 2-3 mois avant). Pour la dialyse
                        péritonéale, il faudra organiser la livraison de votre matériel sur place. Votre centre de dialyse
                        habituel peut vous aider dans ces démarches. De nombreux réseaux internationaux facilitent la dialyse
                        des voyageurs, et certaines agences de voyage sont spécialisées dans l'organisation de séjours pour
                        les personnes dialysées.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q7">
                    <AccordionTrigger className="text-left">
                      Quels sont les effets secondaires possibles de la dialyse ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        Les effets secondaires les plus courants de l'hémodialyse incluent : hypotension (baisse de tension)
                        pendant la séance, crampes musculaires, nausées, maux de tête, fatigue après la séance et risques
                        d'infection ou de problèmes au niveau de l'accès vasculaire. Pour la dialyse péritonéale, les
                        complications possibles comprennent : infections du péritoine (péritonite), infections au site du
                        cathéter, problèmes de drainage du liquide et parfois prise de poids due au glucose contenu dans
                        le liquide de dialyse. Ces effets secondaires ne touchent pas tous les patients et peuvent souvent
                        être minimisés ou traités efficacement par l'équipe médicale.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                  Vie quotidienne avec la dialyse
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q8">
                    <AccordionTrigger className="text-left">
                      Quelles sont les restrictions alimentaires en dialyse ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300 mb-2">
                        Les restrictions alimentaires dépendent de votre situation individuelle et du type de dialyse, mais
                        elles concernent généralement :
                      </p>
                      <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300 mb-2">
                        <li>
                          <strong>Potassium</strong> : Souvent limité, notamment pour les patients en hémodialyse. Les aliments
                          riches en potassium incluent les bananes, oranges, tomates, pommes de terre, épinards.
                        </li>
                        <li>
                          <strong>Phosphore</strong> : Généralement restreint pour tous les dialysés. Se trouve dans les produits
                          laitiers, certaines viandes, les noix, les boissons gazeuses.
                        </li>
                        <li>
                          <strong>Sodium (sel)</strong> : Souvent limité pour contrôler la pression artérielle et la soif.
                        </li>
                        <li>
                          <strong>Liquides</strong> : Restriction des apports liquidiens, particulièrement en hémodialyse.
                        </li>
                      </ul>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        Consultez un diététicien spécialisé en néphrologie pour des recommandations adaptées à votre cas.
                        Les patients en dialyse péritonéale ont généralement des restrictions moins strictes que ceux
                        en hémodialyse.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q9">
                    <AccordionTrigger className="text-left">
                      Peut-on travailler tout en étant sous dialyse ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        Oui, de nombreux patients sous dialyse continuent à travailler. La capacité à maintenir une activité
                        professionnelle dépend de plusieurs facteurs : votre état de santé général, le type de dialyse, la
                        nature de votre travail et la flexibilité de votre employeur. La dialyse péritonéale ou l'hémodialyse
                        à domicile peuvent offrir plus de flexibilité pour concilier traitement et travail. Des aménagements
                        peuvent être nécessaires, comme un travail à temps partiel, des horaires flexibles ou le télétravail.
                        En France, des dispositifs comme le temps partiel thérapeutique ou la reconnaissance de la qualité de
                        travailleur handicapé (RQTH) peuvent faciliter ces aménagements.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q10">
                    <AccordionTrigger className="text-left">
                      Peut-on faire du sport lorsqu'on est dialysé ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        Non seulement c'est possible, mais c'est vivement recommandé ! L'activité physique régulière adaptée
                        présente de nombreux bénéfices pour les patients dialysés : amélioration de la condition cardiovasculaire,
                        renforcement musculaire, meilleur contrôle de la pression artérielle, amélioration du moral et de la
                        qualité de vie. Les activités comme la marche, le vélo d'appartement, la natation (avec précautions pour
                        l'accès vasculaire) et les exercices de renforcement légers sont généralement bien tolérés. L'intensité
                        et le type d'exercice doivent être adaptés à votre condition physique. Consultez votre néphrologue avant
                        de commencer ou de modifier un programme d'activité physique.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q11">
                    <AccordionTrigger className="text-left">
                      Comment la dialyse affecte-t-elle la sexualité ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        L'insuffisance rénale et la dialyse peuvent affecter la vie sexuelle pour diverses raisons : fatigue,
                        modifications hormonales, effets secondaires des médicaments, impact psychologique du traitement, ou
                        préoccupations liées à l'image corporelle (présence d'un cathéter ou d'une fistule). Ces problèmes
                        sont fréquents mais rarement discutés. Il est important de savoir que des solutions existent :
                        ajustements médicamenteux, traitements spécifiques pour certains problèmes comme les troubles de
                        l'érection, ou soutien psychologique. N'hésitez pas à aborder ce sujet avec votre médecin ou une
                        personne de confiance de votre équipe soignante.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                  La greffe rénale
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q12">
                    <AccordionTrigger className="text-left">
                      Qui peut bénéficier d'une greffe de rein ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        La greffe rénale est généralement envisagée pour les patients souffrant d'insuffisance rénale terminale
                        qui n'ont pas de contre-indications majeures. L'éligibilité dépend de plusieurs facteurs : âge (bien que
                        l'âge avancé ne soit plus une contre-indication absolue), état de santé général, absence de certaines
                        maladies actives (cancers, infections graves), capacité à suivre un traitement immunosuppresseur à vie,
                        et stabilité psychologique. Chaque cas est évalué individuellement par une équipe de transplantation,
                        qui détermine si les bénéfices potentiels l'emportent sur les risques. Certaines pathologies peuvent
                        nécessiter des précautions particulières mais ne sont plus des contre-indications absolues.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q13">
                    <AccordionTrigger className="text-left">
                      Combien de temps doit-on attendre pour une greffe ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        Le temps d'attente pour une greffe rénale avec donneur décédé varie considérablement selon les pays,
                        régions, groupes sanguins et profils immunologiques. En France, la durée moyenne d'attente est d'environ
                        2 à 5 ans, mais peut être plus courte ou plus longue selon les cas. L'attribution des greffons se fait
                        selon des critères médicaux précis (compatibilité, urgence médicale, temps d'attente) et non par ordre
                        chronologique strict. La greffe avec donneur vivant (membre de la famille ou proche) permet généralement
                        de réduire significativement ce délai et d'obtenir de meilleurs résultats à long terme.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q14">
                    <AccordionTrigger className="text-left">
                      La greffe signifie-t-elle la fin de tous les traitements ?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        Non, même si la greffe met fin à la dialyse, elle nécessite un traitement immunosuppresseur à vie pour
                        éviter le rejet du greffon. Ces médicaments réduisent les défenses immunitaires pour empêcher que
                        l'organisme ne rejette le nouveau rein. Ils nécessitent une prise régulière et stricte, et peuvent
                        avoir des effets secondaires (risque accru d'infections, hypertension, diabète, etc.). Un suivi médical
                        régulier reste indispensable pour ajuster les doses, surveiller la fonction du greffon et détecter
                        d'éventuelles complications. Cependant, malgré ces contraintes, la greffe offre généralement une
                        meilleure qualité de vie et une plus grande liberté que la dialyse.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild>
                <Link href="/ressources">
                  Consulter nos ressources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
