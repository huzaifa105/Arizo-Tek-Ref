import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PageRoute, ServiceCategory } from './types';

function parseHashToRoute(): PageRoute {
  const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0].toLowerCase();
  if (hash === 'services') return 'services';
  if (hash === 'contact') return 'contact';
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => parseHashToRoute());
  const [preselectedService, setPreselectedService] = useState<ServiceCategory | undefined>(
    undefined
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(parseHashToRoute());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = useCallback(
    (
      page: PageRoute,
      options?: { sectionId?: string; preselectedService?: ServiceCategory }
    ) => {
      if (options?.preselectedService) {
        setPreselectedService(options.preselectedService);
      } else if (page !== 'contact') {
        setPreselectedService(undefined);
      }

      const targetHash = page === 'home' ? '#/' : `#/${page}`;
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      }
      setCurrentPage(page);

      if (options?.sectionId) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            const el = document.getElementById(options.sectionId!);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 60);
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#402015]">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && (
          <ContactPage preselectedService={preselectedService} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
