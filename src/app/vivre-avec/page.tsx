import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Vivre avec la dialyse - Info Dialyse",
  description: "Conseils pratiques pour améliorer votre quotidien en dialyse : alimentation, activité physique, voyages, vie sociale et professionnelle.",
};

export default function VivreAvecPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 dark:bg-blue-950 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Vivre avec la dialyse
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              Conseils pratiques pour améliorer votre quotidien
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert prose-blue max-w-none">
              <h2>Adapter son quotidien à la dialyse</h2>
              <p>
                La dialyse impose certaines contraintes, mais avec quelques adaptations et une bonne organisation,
                il est tout à fait possible de mener une vie épanouie. Voici quelques conseils pour vous aider à
                améliorer votre quotidien.
              </p>

              <h2 id="alimentation">Alimentation et hydratation</h2>
              <p>
                L'alimentation joue un rôle crucial dans la prise en charge de l'insuffisance rénale et de la dialyse.
                Une diététique adaptée permet de limiter l'accumulation de substances que les reins défaillants ne
                peuvent plus éliminer.
              </p>

              <h3>Principes généraux :</h3>
              <ul>
                <li>
                  <strong>Contrôler les apports en potassium</strong> - Limiter la consommation d'aliments riches en potassium
                  (bananes, tomates, oranges, pommes de terre, fruits secs, chocolat...)
                </li>
                <li>
                  <strong>Limiter le phosphore</strong> - Réduire les produits laitiers, certaines viandes,
                  les oléagineux, les sodas...
                </li>
                <li>
                  <strong>Surveiller les apports en sodium (sel)</strong> - Limiter le sel pour contrôler la pression artérielle
                  et la soif
                </li>
                <li>
                  <strong>Adapter les apports en protéines</strong> - Ni trop, ni trop peu, selon les recommandations de votre médecin
                </li>
                <li>
                  <strong>Contrôler les apports hydriques</strong> - Respecter la quantité de liquide autorisée quotidiennement
                </li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-8">
                <h4 className="text-blue-700 dark:text-blue-400 mb-2">Conseils pratiques :</h4>
                <ul className="mb-0">
                  <li>Utilisez des herbes et épices pour remplacer le sel</li>
                  <li>Cuisinez vous-même vos repas autant que possible pour contrôler les ingrédients</li>
                  <li>Faites tremper certains légumes coupés en morceaux avant cuisson pour réduire leur teneur en potassium</li>
                  <li>Demandez à rencontrer un(e) diététicien(ne) spécialisé(e) en néphrologie</li>
                  <li>Tenez un journal alimentaire pour mieux comprendre l'impact de votre alimentation</li>
                  <li>Pour étancher votre soif sans boire : sucez des glaçons, rincez-vous la bouche à l'eau fraîche, mâchez un chewing-gum</li>
                </ul>
              </div>

              <h2 id="activite">Activité physique</h2>
              <p>
                Contrairement à certaines idées reçues, l'activité physique est fortement recommandée pour les personnes
                dialysées. Elle améliore la condition physique, la santé cardiovasculaire, l'humeur et la qualité de vie.
              </p>

              <h3>Bénéfices de l'activité physique :</h3>
              <ul>
                <li>Amélioration de la condition cardiovasculaire</li>
                <li>Renforcement musculaire</li>
                <li>Meilleur contrôle de la pression artérielle</li>
                <li>Amélioration du sommeil</li>
                <li>Réduction du stress et de l'anxiété</li>
                <li>Meilleure efficacité de la dialyse (pour l'hémodialyse)</li>
              </ul>

              <p>
                Avant de commencer toute activité physique, discutez-en avec votre néphrologue qui pourra vous
                orienter vers les activités les plus adaptées à votre condition.
              </p>

              <h3>Activités recommandées :</h3>
              <ul>
                <li><strong>Marche</strong> - Idéale pour débuter, facile à pratiquer et adaptable</li>
                <li><strong>Natation et aquagym</strong> - Excellentes pour les articulations, attention à la propreté de l'eau avec les accès vasculaires</li>
                <li><strong>Vélo d'appartement</strong> - Pratique à domicile, intensité facilement modulable</li>
                <li><strong>Exercices d'étirement et de souplesse</strong> - Yoga adapté, étirements doux</li>
                <li><strong>Renforcement musculaire léger</strong> - Avec élastiques ou petits poids</li>
              </ul>

              <h2 id="voyages">Voyages et déplacements</h2>
              <p>
                La dialyse ne doit pas vous empêcher de voyager ! Avec une bonne préparation, il est possible
                de partir en vacances ou en déplacement professionnel.
              </p>

              <h3>Pour l'hémodialyse :</h3>
              <ul>
                <li>Planifiez votre voyage à l'avance (idéalement 2-3 mois avant)</li>
                <li>Identifiez les centres de dialyse à votre destination</li>
                <li>Demandez à votre néphrologue de préparer votre dossier médical pour le centre d'accueil</li>
                <li>Vérifiez les modalités de prise en charge par votre assurance maladie</li>
                <li>Emportez suffisamment de médicaments pour toute la durée du séjour, plus une marge de sécurité</li>
              </ul>

              <h3>Pour la dialyse péritonéale :</h3>
              <ul>
                <li>Organisez la livraison de votre matériel à votre lieu de séjour</li>
                <li>Si vous utilisez un cycleur, vérifiez sa compatibilité électrique avec votre destination</li>
                <li>Identifiez un centre de dialyse proche de votre destination en cas d'urgence</li>
                <li>Respectez les conditions d'hygiène pour vos échanges</li>
              </ul>

              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg my-8">
                <h4 className="font-semibold text-lg mb-2">Bon à savoir</h4>
                <p className="mb-0">
                  Il existe des associations et agences spécialisées qui peuvent vous aider à organiser vos vacances
                  en dialyse. N'hésitez pas à vous renseigner auprès de votre équipe soignante.
                </p>
              </div>

              <h2 id="vie-sociale">Vie sociale et familiale</h2>
              <p>
                Maintenir une vie sociale active est essentiel pour votre bien-être psychologique. La dialyse
                peut modifier certaines habitudes, mais ne doit pas vous isoler.
              </p>

              <h3>Conseils pour préserver votre vie sociale :</h3>
              <ul>
                <li>
                  <strong>Communiquez ouvertement</strong> avec vos proches sur votre traitement, vos contraintes
                  mais aussi vos capacités
                </li>
                <li>
                  <strong>Planifiez vos activités sociales</strong> en tenant compte de votre calendrier de
                  dialyse et de votre niveau d'énergie
                </li>
                <li>
                  <strong>N'hésitez pas à adapter les horaires</strong> de vos rencontres plutôt que de les annuler
                </li>
                <li>
                  <strong>Rejoignez un groupe de soutien</strong> de patients dialysés pour partager vos expériences
                </li>
                <li>
                  <strong>Utilisez les technologies</strong> (appels vidéo, réseaux sociaux) pour maintenir le contact
                  lorsque vous ne pouvez pas vous déplacer
                </li>
              </ul>

              <h3>Pour les proches :</h3>
              <p>
                Si vous êtes un proche d'une personne dialysée, votre soutien est précieux. Informez-vous sur
                la maladie et le traitement, soyez à l'écoute sans surprotéger, proposez votre aide de manière
                concrète et respectez les moments de fatigue ou de repos nécessaires.
              </p>

              <h2 id="vie-pro">Vie professionnelle</h2>
              <p>
                Continuer à travailler est possible et même souvent bénéfique pour de nombreux patients dialysés.
                Des aménagements peuvent être nécessaires.
              </p>

              <h3>Conseils pour concilier dialyse et travail :</h3>
              <ul>
                <li>
                  <strong>Informez votre employeur</strong> de votre situation (selon votre souhait) pour faciliter
                  d'éventuels aménagements
                </li>
                <li>
                  <strong>Discutez avec votre néphrologue</strong> des horaires de dialyse compatibles avec votre
                  activité professionnelle (sessions du soir, dialyse péritonéale...)
                </li>
                <li>
                  <strong>Renseignez-vous sur vos droits</strong> : temps partiel thérapeutique, reconnaissance de
                  travailleur handicapé (RQTH), aménagements de poste...
                </li>
                <li>
                  <strong>Gérez votre énergie</strong> en privilégiant les tâches importantes aux moments où vous
                  vous sentez le plus en forme
                </li>
                <li>
                  <strong>Envisagez le télétravail</strong> si votre métier le permet
                </li>
              </ul>

              <h2 id="soutien">Soutien psychologique</h2>
              <p>
                La dialyse peut avoir un impact émotionnel important. Des sentiments de frustration, d'anxiété ou
                de dépression peuvent survenir. Il est essentiel de ne pas les négliger.
              </p>

              <h3>Ressources disponibles :</h3>
              <ul>
                <li>Psychologue de votre centre de dialyse</li>
                <li>Groupes de parole et associations de patients</li>
                <li>Forums en ligne de patients dialysés</li>
                <li>Services d'écoute téléphonique</li>
              </ul>

              <p>
                N'hésitez pas à parler de vos difficultés psychologiques à votre équipe soignante. Des solutions
                existent pour vous aider.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-8">
                <h3 className="text-blue-700 dark:text-blue-400 mb-2">Message important</h3>
                <p className="mb-0">
                  La dialyse est une part de votre vie, mais elle ne définit pas qui vous êtes. Avec les adaptations
                  nécessaires et le soutien adéquat, vous pouvez continuer à poursuivre vos passions, entretenir vos
                  relations et vous épanouir. N'oubliez pas que chaque patient est unique, et ce qui fonctionne pour
                  l'un peut ne pas convenir à l'autre. L'équipe soignante est là pour vous accompagner dans cette démarche.
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild>
                <Link href="/faq">
                  Consulter la FAQ
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
