import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import StorySection from '@/components/about/story-section'
import TeamSection from '@/components/about/team-section'
import GoBackButton from '@/components/go-back-button' 
import Breadcrumb from '@/components/ui/breadcrumb'
import ValuesSection from '@/components/sections/values-section'
export default function AboutPage() {
  
  const aboutPaths = [
    { label: 'À Propos de Nous', href: '/about', isCurrent: true },
  ];
  
  return (
    <>
      <Header />
      <main className="pt-16">
        
        {/* En-tête de page avec Bouton Retour et Fil d'Ariane */}
        <div className="container mx-auto px-4 pt-8 pb-4">
          <div className="flex items-center gap-4 mb-2">
            <GoBackButton />
            <h1 className="text-3xl font-bold text-gray-900">À Propos de Nous</h1> 
          </div>

          <div className="ml-2">
            <Breadcrumb paths={aboutPaths} />
          </div>
        </div>
        <StorySection />
   
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}