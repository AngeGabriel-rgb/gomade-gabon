import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import ContactForm from '@/components/contact/contact-form'
import ContactInfo from '@/components/contact/contact-info'
import GoBackButton from '@/components/go-back-button' 
import Breadcrumb from '@/components/ui/breadcrumb'

export default function ContactPage() {
  
  const contactPaths = [
    { label: 'Nous Contacter', href: '/contact', isCurrent: true },
  ];
  
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* En-tête de page avec Bouton Retour et Fil d'Ariane */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="flex items-center gap-4 mb-2">
            <GoBackButton />
            <h1 className="text-3xl font-bold text-gray-900">Nous Contacter</h1>
          </div>
          
          <div className="ml-2">
            <Breadcrumb paths={contactPaths} />
          </div>
        </div>
        
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              {/* Le titre original est masqué/retiré car le h1 est maintenant en haut */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vous cherchez à analyser les grandes tendances du marché, à faire face aux nouveaux enjeux ou à connaitre le niveau de satisfaction de vos clients… Contactez-nous !
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}