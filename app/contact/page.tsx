import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import ContactForm from '@/components/contact/contact-form'
import ContactInfo from '@/components/contact/contact-info'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Nous Contacter
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Avez des questions? Nous serions ravis d'en discuter avec vous.
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
