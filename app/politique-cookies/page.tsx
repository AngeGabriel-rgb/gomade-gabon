import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import GoBackButton from '@/components/go-back-button' 
import Breadcrumb from '@/components/ui/breadcrumb'

export default function PolitiqueCookiesPage() {
  
  const cookiePaths = [
    { label: 'Politique de Cookies', href: '/politique-cookies', isCurrent: true },
  ];
  
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* En-tête de page avec Bouton Retour et Fil d'Ariane */}
        <div className="container mx-auto px-4 pt-8 pb-4">
          <div className="flex items-center gap-4 mb-2">
            <GoBackButton />
            <h1 className="text-3xl font-bold text-gray-900">Politique de Cookies</h1>
          </div>

          <div className="ml-2">
            <Breadcrumb paths={cookiePaths} />
          </div>
        </div>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-gray-700">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Qu'est-ce qu'un cookie ?</h2>
                  <p>
                    Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) 
                    lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences 
                    sur une période donnée, afin que vous n'ayez pas à les ressaisir à chaque fois que vous revenez sur le site 
                    ou naviguez d'une page à l'autre.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comment utilisons-nous les cookies ?</h2>
                  <p>
                    GOMADE GABON utilise des cookies pour améliorer votre expérience de navigation et traiter vos demandes. 
                    Nous collectons également vos données personnelles (nom, email, téléphone, entreprise) lorsque vous 
                    remplissez nos formulaires de contact.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types de cookies utilisés</h2>
                  
                  <div className="space-y-6 mt-4">
                    <div className="border-l-4 border-[#DB2E33] pl-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies nécessaires</h3>
                      <p>
                        Ces cookies sont essentiels au fonctionnement du site et au traitement sécurisé de vos données personnelles. 
                        Ils ne peuvent pas être désactivés. Ils sont généralement définis en réponse à des actions que vous effectuez 
                        et qui équivalent à une demande de services, comme la définition de vos préférences de confidentialité, 
                        la connexion ou le remplissage de formulaires.
                      </p>
                    </div>

                    <div className="border-l-4 border-gray-300 pl-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies analytiques</h3>
                      <p>
                        Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web en collectant 
                        et en rapportant des informations de manière anonyme. Ces données nous permettent d'améliorer continuellement 
                        nos services et votre expérience utilisateur.
                      </p>
                    </div>

                    <div className="border-l-4 border-gray-300 pl-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookies marketing</h3>
                      <p>
                        Ces cookies permettent la personnalisation de votre expérience. Vos préférences et données de navigation 
                        sont collectées pour adapter le contenu et les offres à vos intérêts. Ces cookies peuvent également être 
                        utilisés pour limiter le nombre de fois que vous voyez une publicité et pour mesurer l'efficacité des 
                        campagnes publicitaires.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gestion de vos préférences</h2>
                  <p>
                    Vous pouvez à tout moment modifier ou retirer votre consentement concernant les cookies en cliquant sur 
                    le bouton "Paramètres des cookies" dans la bannière de cookies ou en accédant à cette page. 
                    Vous pouvez également configurer votre navigateur pour refuser les cookies, bien que cela puisse affecter 
                    certaines fonctionnalités du site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conservation des données</h2>
                  <p>
                    Les cookies nécessaires sont conservés pendant la durée de votre session ou jusqu'à un an maximum. 
                    Les cookies analytiques et marketing sont conservés conformément à vos préférences et peuvent être 
                    supprimés à tout moment via les paramètres de votre navigateur.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vos droits</h2>
                  <p>
                    Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, 
                    de suppression et d'opposition concernant vos données personnelles. Pour exercer ces droits, 
                    vous pouvez nous contacter via notre formulaire de contact ou par email.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mise à jour de cette politique</h2>
                  <p>
                    Nous pouvons mettre à jour cette politique de cookies de temps à autre pour refléter les changements 
                    dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires. 
                    Nous vous encourageons à consulter régulièrement cette page pour rester informé de notre utilisation des cookies.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
