import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { ClientsSection } from './components/sections/ClientsSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { ToolsSection } from './components/sections/ToolsSection'
import { AboutSection } from './components/sections/AboutSection'
import { RecognitionsSection } from './components/sections/RecognitionsSection'
import { PressSection } from './components/sections/PressSection'
import { ContactSection } from './components/sections/ContactSection'
import { PortalStrip } from './components/sections/PortalStrip'
import { useScrollReveal } from './lib/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-epb-cream text-epb-ink">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-epb-ink focus:px-4 focus:py-3 focus:text-white"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <ToolsSection />
        <AboutSection />
        <RecognitionsSection />
        <PressSection />
        <ContactSection />
        <PortalStrip />
      </main>

      <Footer />
    </div>
  )
}

export default App
