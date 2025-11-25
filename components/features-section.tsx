"use client"

import { useEffect, useRef, useState } from "react"

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      title: "Ultra-fast Performance",
      description: "Lightning-quick rendering and smooth 60fps animations",
      icon: "⚡",
    },
    {
      title: "Intelligent Automation",
      description: "AI-powered workflows that learn from your patterns",
      icon: "🤖",
    },
    {
      title: "Beautiful UI Animations",
      description: "Pre-built components with stunning visual effects",
      icon: "✨",
    },
  ]

  return (
    <section ref={ref} className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-pretty">Everything you need</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border border-border bg-card hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
