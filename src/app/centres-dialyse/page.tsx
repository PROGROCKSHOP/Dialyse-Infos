import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Carte des centres de dialyse en France - Info Dialyse",
  description: "Trouvez facilement un centre de dialyse pour vos vacances en France grâce à notre carte interactive. Planifiez vos déplacements sereinement.",
};

export default function CentresDialysePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 dark:bg-blue-950 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Carte des centres de dialyse en France
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              Planifiez vos vacances et trouvez facilement un centre de dialyse proche de votre lieu de séjour
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden h-full">
                <CardHeader>
                  <CardTitle>Carte interactive</CardTitle>
                  <CardDescription>
                    Cliquez sur une région ou utilisez le formulaire de recherche pour trouver des centres de dialyse
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 relative">
                  <div className="aspect-[4/3] relative bg-zinc-100 dark:bg-zinc-800 w-full p-4">
                    <div className="mb-4 px-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Ville, code postal ou département"
                            className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md"
                          />
                        </div>
                        <Button>Rechercher</Button>
                      </div>
                    </div>
                    <div className="relative h-[500px] w-full">
                      <Image
                        src="/images/carte-nephrologie-france.png"
                        alt="Carte des centres de néphrologie en France"
                        className="object-contain"
                        fill
                      />
                      {/* Emplacement pour la carte interactive à intégrer ultérieurement */}
                      <div className="absolute inset-0 flex items-center justify-center text-lg text-zinc-500 dark:text-zinc-400 bg-zinc-100/50 dark:bg-zinc-800/50">
                        Carte interactive en cours de développement
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Centres de dialyse trouvés</CardTitle>
                  <CardDescription>
                    Sélectionnez un point sur la carte ou effectuez une recherche pour voir les centres disponibles
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-1 max-h-[600px] overflow-y-auto">
                    <div className="px-6 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/10 cursor-pointer border-l-4 border-transparent hover:border-blue-500">
                      <h3 className="font-medium text-blue-700 dark:text-blue-400">Centre de Néphrologie - CHU de Bordeaux</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Place Amélie Raba-Léon, 33000 Bordeaux</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">Téléphone: 05 56 79 56 79</p>
                    </div>
                    <div className="px-6 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/10 cursor-pointer border-l-4 border-transparent hover:border-blue-500">
                      <h3 className="font-medium text-blue-700 dark:text-blue-400">Centre de Dialyse CTMR Aquitaine</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">11 Rue Antoine Becquerel, 33700 Mérignac</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">Téléphone: 05 57 26 29 00</p>
                    </div>
                    <div className="px-6 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/10 cursor-pointer border-l-4 border-transparent hover:border-blue-500">
                      <h3 className="font-medium text-blue-700 dark:text-blue-400">Centre d'Autodialyse Arcachon</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">8 Avenue du Général de Gaulle, 33120 Arcachon</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">Téléphone: 05 57 52 01 01</p>
                    </div>
                    <div className="px-6 py-3 bg-blue-50 dark:bg-blue-900/10 cursor-pointer border-l-4 border-blue-500">
                      <h3 className="font-medium text-blue-700 dark:text-blue-400">Clinique du Tondu - Service Néphrologie</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">151 Rue du Tondu, 33000 Bordeaux</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">Téléphone: 05 56 96 33 33</p>
                    </div>
                    <div className="px-6 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/10 cursor-pointer border-l-4 border-transparent hover:border-blue-500">
                      <h3 className="font-medium text-blue-700 dark:text-blue-400">Centre AURAD Aquitaine Artigues</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">15 Avenue du Périgord, 33370 Artigues-près-Bordeaux</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">Téléphone: 05 56 32 01 01</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">
              Préparer votre dialyse en vacances
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Comment planifier vos vacances ?</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Consultez votre néphrologue pour discuter de votre projet de vacances au moins 2-3 mois à l'avance</li>
                  <li>Identifiez les centres de dialyse près de votre lieu de séjour avec notre carte</li>
                  <li>Contactez le centre de dialyse de votre choix pour vérifier leurs disponibilités</li>
                  <li>Demandez à votre néphrologue de préparer votre dossier médical à transmettre au centre d'accueil</li>
                  <li>Vérifiez votre couverture d'assurance maladie pour la prise en charge des soins hors de votre région</li>
                </ol>
              </div>

              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Documents à préparer</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Dossier médical complet (à faire préparer par votre néphrologue)</li>
                  <li>Résultats récents d'analyses sanguines</li>
                  <li>Ordonnances de vos médicaments habituels</li>
                  <li>Carte Vitale et attestation de droits à jour</li>
                  <li>Coordonnées de votre centre de dialyse habituel</li>
                  <li>Coordonnées de votre néphrologue traitant</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Réseaux de prise en charge</h3>
                <p className="mb-4">
                  Plusieurs réseaux facilitent la prise en charge des patients dialysés en vacances :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>FRANCE REIN</strong> - Association française des patients insuffisants rénaux</li>
                  <li><strong>FNAIR Vacances</strong> - Service d'aide à l'organisation de séjours vacances pour patients dialysés</li>
                  <li><strong>Diaverum Holiday Dialysis</strong> - Réseau international de centres de dialyse</li>
                  <li><strong>Réseau NEPHROCARE</strong> - Centres Fresenius en France et à l'international</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/documents/guide-voyages.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Télécharger notre guide complet des vacances en dialyse
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
