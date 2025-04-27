import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Ressources sur la dialyse - Info Dialyse",
  description: "Ressources utiles pour les patients dialysés : associations, numéros d'urgence, documents à télécharger, vidéos et liens utiles.",
};

export default function RessourcesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 dark:bg-blue-950 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Ressources utiles
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              Associations, documents et liens pour vous accompagner
            </p>
          </div>
        </div>
      </section>

      {/* Section vidéo ECHO liée à France Rein */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="overflow-hidden mb-10">
            <CardHeader>
              <CardTitle className="text-xl">Comprendre la maladie rénale chronique et l'hémodialyse</CardTitle>
              <CardDescription>
                Production pédagogique de l’ECHO (Équipe de Coordination Hospitalière pour la dialyse), autorisée par Info Dialyse, et recommandée par France Rein pour tous les patients et leurs proches.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-md overflow-hidden mb-4">
                <video
                  src="https://echo-dialyse.fr/wp-content/uploads/2022/06/LA-MRC-HD-1080p.mp4"
                  controls
                  poster="/images/thumbnail-echo-mrc-hd.jpg"
                  className="w-full h-full object-contain"
                >
                  Votre navigateur ne prend pas en charge la lecture vidéo.
                </video>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Cette vidéo aborde les fondamentaux de l’insuffisance rénale chronique et explique, étape par étape, le rôle et l'intérêt de l’hémodialyse dans le parcours de soin. Accessible à tous les patients et familles.
              </p>
              <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
                Source vidéo : ECHO – Intégrée sur recommandation France Rein
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            {/* Associations */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                Associations de patients
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>France Rein</CardTitle>
                    <CardDescription>Association nationale de patients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                      Principale association française de patients insuffisants rénaux, dialysés et transplantés.
                      France Rein milite pour améliorer la qualité de vie et de traitement des patients, et
                      sensibiliser le public au don d'organes.
                    </p>
                    <div className="flex flex-col space-y-2">
                      <div><span className="font-medium">Site web :</span> <a href="https://www.francerein.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.francerein.org</a></div>
                      <div><span className="font-medium">Téléphone :</span> 01 40 19 92 85</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Renaloo</CardTitle>
                    <CardDescription>Association de patients et plateforme d'information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                      Communauté web et association de patients atteints de maladies rénales, dialysés ou
                      greffés. Renaloo offre information, entraide et défend les droits des patients.
                    </p>
                    <div className="flex flex-col space-y-2">
                      <div><span className="font-medium">Site web :</span> <a href="https://renaloo.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">renaloo.com</a></div>
                      <div><span className="font-medium">Contact :</span> contact@renaloo.com</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Numéros et contacts utiles */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                Numéros et contacts utiles
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md">
                      <div>
                        <h3 className="font-semibold">Agence de la biomédecine</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Information sur la transplantation</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <a href="https://www.agence-biomedecine.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">www.agence-biomedecine.fr</a>
                      </div>
                    </li>
                    <li className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md">
                      <div>
                        <h3 className="font-semibold">SAMU</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Urgences médicales</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="font-bold">15</span>
                      </div>
                    </li>
                    <li className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md">
                      <div>
                        <h3 className="font-semibold">Assurance Maladie</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Informations sur vos droits</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <a href="https://www.ameli.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">www.ameli.fr</a> - 3646
                      </div>
                    </li>
                    <li className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md">
                      <div>
                        <h3 className="font-semibold">Société Francophone de Néphrologie, Dialyse et Transplantation</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Société savante pour les professionnels</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <a href="https://www.sfndt.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">www.sfndt.org</a>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Documents utiles */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                Documents utiles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Guide de l'alimentation</CardTitle>
                    <CardDescription>Conseils nutritionnels pour les patients dialysés</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                      Guide pratique pour adapter son alimentation en fonction des contraintes de la dialyse.
                      Inclut des recettes et des conseils pour contrôler les apports en potassium, phosphore et sodium.
                    </p>
                    <Button asChild variant="outline">
                      <a href="/documents/guide-alimentation.pdf" target="_blank" rel="noopener noreferrer">Télécharger le PDF</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Carnet de suivi</CardTitle>
                    <CardDescription>Pour noter vos constantes et rendez-vous</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                      Document à imprimer permettant de suivre vos constantes (poids, tension, etc.),
                      vos rendez-vous médicaux et vos traitements. Un outil pratique pour dialoguer avec votre équipe médicale.
                    </p>
                    <Button asChild variant="outline">
                      <a href="/documents/carnet-suivi.pdf" target="_blank" rel="noopener noreferrer">Télécharger le PDF</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Guide des voyages</CardTitle>
                    <CardDescription>Conseils pour voyager sereinement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                      Informations pratiques pour préparer vos déplacements et voyages en France ou à l'étranger.
                      Inclut des modèles de documents à remplir pour les centres d'accueil.
                    </p>
                    <Button asChild variant="outline">
                      <a href="/documents/guide-voyages.pdf" target="_blank" rel="noopener noreferrer">Télécharger le PDF</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Droits sociaux</CardTitle>
                    <CardDescription>Guide des démarches administratives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                      Synthèse des droits sociaux pour les patients en dialyse : ALD, invalidité,
                      aménagements professionnels, aides financières, etc.
                    </p>
                    <Button asChild variant="outline">
                      <a href="/documents/droits-sociaux.pdf" target="_blank" rel="noopener noreferrer">Télécharger le PDF</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sites web recommandés */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                Sites web recommandés
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md">
                      <h3 className="font-semibold">Haute Autorité de Santé (HAS)</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                        Recommandations officielles et guides de bonnes pratiques
                      </p>
                      <a href="https://www.has-sante.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">www.has-sante.fr</a>
                    </li>
                    <li className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md">
                      <h3 className="font-semibold">FNAIR Vacances</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                        Organisation de séjours vacances pour patients dialysés
                      </p>
                      <a href="https://www.francerein.org/activites/loisir-et-voyage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">www.francerein.org/activites/loisir-et-voyage</a>
                    </li>
                    <li className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md">
                      <h3 className="font-semibold">Diaverum</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                        Réseau international de centres de dialyse, utile pour organiser vos déplacements
                      </p>
                      <a href="https://www.diaverum.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">www.diaverum.com</a>
                    </li>
                    <li className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-md">
                      <h3 className="font-semibold">Fondation du Rein</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                        Information sur la recherche et la prévention des maladies rénales
                      </p>
                      <a href="https://www.fondation-du-rein.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">www.fondation-du-rein.org</a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Vidéos pédagogiques */}
            <div>
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                Vidéos pédagogiques
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Comprendre l'hémodialyse</CardTitle>
                    <CardDescription>Explication du fonctionnement de l'hémodialyse</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center mb-4">
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm">Vidéo explicative</p>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                      Durée : 5:30 - Cette vidéo explique de manière simple le fonctionnement de l'hémodialyse,
                      avec des animations claires et des témoignages de patients.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>La dialyse péritonéale à domicile</CardTitle>
                    <CardDescription>Guide pratique pour réaliser sa dialyse chez soi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center mb-4">
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm">Vidéo explicative</p>
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                      Durée : 8:45 - Tutoriel détaillé sur les étapes à suivre pour réaliser correctement
                      une dialyse péritonéale à domicile, avec conseils d'hygiène.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild>
                <Link href="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
