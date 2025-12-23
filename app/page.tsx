import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import HeroSection from '@/components/sections/hero-section'
import PartnersSection from '@/components/sections/partners-section'
import ServicesPreview from '@/components/sections/services-preview'
import QuickContact from '@/components/sections/quick-contact'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <PartnersSection />
        <ServicesPreview />
        <QuickContact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
