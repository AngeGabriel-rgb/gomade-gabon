import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import StorySection from '@/components/about/story-section'
import TeamSection from '@/components/about/team-section'
import MissionSection from '@/components/about/mission-section'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <StorySection />
        <MissionSection />
        <TeamSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
