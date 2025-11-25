import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="w-full bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
