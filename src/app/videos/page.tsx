import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Vidéos éducatives sur la dialyse - Info Dialyse",
  description: "Collection de vidéos explicatives sur les différents aspects de la dialyse : comprendre le traitement, témoignages de patients, techniques et conseils pratiques.",
};

export default function VideosPage() {
  const videos = [
    {
      id: "video-echo-mrc-hd",
      title: "Comprendre la maladie rénale chronique et l'hémodialyse",
      description: "Explication pédagogique en vidéo : du fonctionnement des reins à l'intérêt de l'hémodialyse, pour les patients et leurs proches.",
      duration: "~11 min",
      videoSrc: "https://echo-dialyse.fr/wp-content/uploads/2022/06/LA-MRC-HD-1080p.mp4",
      thumbnail: "/images/thumbnail-echo-mrc-hd.jpg"
    },
    // ... autres vidéos fictives ou à venir ...
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 dark:bg-blue-950 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Vidéos éducatives sur la dialyse
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              Consultez nos vidéos pour mieux comprendre la maladie rénale chronique et la dialyse
            </p>
          </div>
        </div>
      </section>

      {/* Mise en avant de la vidéo ECHO */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="overflow-hidden mb-10">
            <CardHeader>
              <CardTitle className="text-xl">Comprendre la maladie rénale chronique et l'hémodialyse</CardTitle>
              <CardDescription>
                Une production pédagogique de l’ECHO, autorisée pour Info Dialyse. Accessible à tous les patients, familles et aidants.
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
                Cette vidéo aborde les fondamentaux de l’insuffisance rénale chronique (MRC) et explique, étape par étape, l'intérêt de l’hémodialyse dans le parcours de soin. Elle a été réalisée par l’ECHO (Équipe de Coordination Hospitalière pour la dialyse) à destination du grand public.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Placeholder pour les autres vidéos */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.slice(1).map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 relative group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-zinc-500 dark:text-zinc-400">Vidéo à venir</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={`#${video.id}`}>
                      Regarder la vidéo
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-zinc-100 dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Ces vidéos sont à visée éducative et ne remplacent pas l’avis de votre équipe soignante.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
