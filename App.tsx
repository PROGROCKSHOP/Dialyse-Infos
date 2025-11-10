import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HomePage } from './components/HomePage';
import { RegionsPage } from './components/RegionsPage';
import { AmazonAffiliatePage } from './components/AmazonAffiliatePage';
import { InfoPage } from './components/InfoPage';
import { GeocodingTool } from './components/GeocodingTool';
import { MissingCoordinatesChecker } from './components/MissingCoordinatesChecker';
import { CitiesAndDepartmentsPage } from './components/CitiesAndDepartmentsPage';
import { YouTubeMosaicPage } from './components/YouTubeMosaicPage';
import { YouTubeDestinationsHub } from './components/YouTubeDestinationsHub';
import { TestSlideshowPage } from './components/TestSlideshowPage';
import { Button } from './components/ui/button';
import { Home, Map, ShoppingBag, Info, Menu, MapPin, MapPinOff, Video, Play } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet';

type Page = 'home' | 'regions' | 'cities' | 'youtube-mosaic' | 'youtube-destinations' | 'amazon' | 'info' | 'geocoding' | 'missing-coords' | 'test-slideshow';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCityForYoutube, setSelectedCityForYoutube] = useState<{cityId: string, deptCode: string} | null>(null);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  const navigation = [
    { id: 'home' as Page, label: 'Accueil', icon: Home },
    { id: 'regions' as Page, label: 'Centres de Dialyse', icon: Map },
    { id: 'youtube-destinations' as Page, label: 'Pages YouTube', icon: Play },
    { id: 'cities' as Page, label: 'Villes et Départements', icon: Video },
    { id: 'amazon' as Page, label: 'Produits Utiles', icon: ShoppingBag },
    { id: 'info' as Page, label: 'Informations', icon: Info },
  ];

  // Navigation admin (visible uniquement en développement)
  const adminNavigation = [
    { id: 'geocoding' as Page, label: 'Géocodage GPS', icon: MapPin },
    { id: 'missing-coords' as Page, label: 'Vérif. Coordonnées', icon: MapPinOff },
    { id: 'test-slideshow' as Page, label: '🎬 Test Diaporama', icon: Play },
  ];

  const handleNavigate = (page: Page) => {
    setIsPageTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsPageTransitioning(false);
    }, 300);
  };

  const handleCitySelection = (cityId: string, deptCode: string) => {
    setSelectedCityForYoutube({ cityId, deptCode });
    setCurrentPage('youtube-mosaic');
  };

  // Écouter les événements de navigation personnalisés
  useEffect(() => {
    const handleCustomNavigate = (event: CustomEvent) => {
      handleNavigate(event.detail as Page);
    };
    window.addEventListener('navigate', handleCustomNavigate as EventListener);
    return () => {
      window.removeEventListener('navigate', handleCustomNavigate as EventListener);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 border-b border-blue-900/20 sticky top-0 z-50 shadow-lg backdrop-blur-sm" style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Logo / Brand */}
            <motion.div 
              className="flex items-center cursor-pointer flex-shrink-0"
              onClick={() => handleNavigate('home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div>
                <h1 className="text-white text-2xl font-bold tracking-tight whitespace-nowrap">TOURISME & DIALYSE</h1>
                <p className="text-blue-100 text-xs whitespace-nowrap">Voyagez sereinement en France</p>
              </div>
            </motion.div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 flex-shrink-0">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => handleNavigate(item.id)}
                      className={`gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'bg-white text-blue-600 shadow-md hover:bg-white/95' 
                          : 'text-white/90 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden xl:inline">{item.label}</span>
                    </Button>
                  </motion.div>
                );
              })}
              
              {/* Admin tools - visible uniquement en dev */}
              {adminNavigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? 'secondary' : 'outline'}
                    onClick={() => handleNavigate(item.id)}
                    className={`gap-2 ${currentPage === item.id ? 'bg-yellow-300 text-orange-700 border-yellow-400' : 'border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-orange-700'}`}
                    title="Outil d'administration"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Button
                        key={item.id}
                        variant={currentPage === item.id ? 'default' : 'ghost'}
                        onClick={() => handleNavigate(item.id)}
                        className="justify-start gap-3 w-full"
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </Button>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
            {currentPage === 'regions' && <RegionsPage />}
            {currentPage === 'youtube-destinations' && <YouTubeDestinationsHub />}
            {currentPage === 'cities' && <CitiesAndDepartmentsPage onSelectCity={handleCitySelection} />}
            {currentPage === 'youtube-mosaic' && (
              <YouTubeMosaicPage 
                selectedCity={selectedCityForYoutube}
                onBack={() => handleNavigate('cities')}
              />
            )}
            {currentPage === 'amazon' && <AmazonAffiliatePage />}
            {currentPage === 'info' && <InfoPage />}
            {currentPage === 'geocoding' && <GeocodingTool />}
            {currentPage === 'missing-coords' && <MissingCoordinatesChecker />}
            {currentPage === 'test-slideshow' && <TestSlideshowPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="mb-4">
                <h4 className="text-white text-xl font-bold mb-2">TOURISME & DIALYSE</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Votre guide complet pour voyager sereinement en France tout en suivant vos séances de dialyse. 
                Découvrez les plus belles destinations françaises !
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white mb-6 text-lg font-semibold">Navigation Rapide</h4>
              <ul className="space-y-3">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <motion.button
                        onClick={() => handleNavigate(item.id)}
                        className="text-gray-400 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                      >
                        <Icon className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                        {item.label}
                      </motion.button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-6 text-lg font-semibold">À Propos</h4>
              <p className="text-gray-400 mb-4">
                <strong className="text-white">Contact :</strong><br />
                <a href="mailto:contact@dialyse-infos.com" className="text-blue-300 hover:text-blue-200 hover:underline transition-all">
                  contact@dialyse-infos.com
                </a>
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Un site créé avec passion par un patient dialysé pour tous les patients dialysés qui souhaitent 
                voyager et découvrir les merveilles de la France. 🇫🇷
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a href="https://www.youtube.com/@TourismeetDialyse" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                  <Play className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-center text-gray-400 text-sm space-y-2">
              <p className="text-white font-medium">© 2025 TOURISME & DIALYSE - Tous droits réservés</p>
              <p>
                Ce site contient des liens d'affiliation Amazon. En achetant via ces liens, 
                vous soutenez le développement du site sans frais supplémentaires.
              </p>
              <p className="text-gray-500 text-xs">
                Domaine : dialyse-infos.com | Marque : TOURISME & DIALYSE
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
