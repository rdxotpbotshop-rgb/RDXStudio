"use client"

export function GallerySection() {
  const items = ["Dashboard", "Analytics", "Reports", "Settings", "Profile", "Performance"]

  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-pretty">Built for everyone</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl overflow-hidden border border-border bg-card hover:border-accent cursor-pointer transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent"></div>
                <h3 className="text-xl font-bold">{item}</h3>
                <p className="text-sm text-muted-foreground">Powerful features for your workflow</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
