"use client"

export function CTASection() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-primary/95 to-accent/95">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground text-pretty">
          Ready to build your future?
        </h2>

        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Join thousands of teams already creating amazing experiences
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-primary-foreground text-primary font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Start Now
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
            Contact Sales
          </button>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
