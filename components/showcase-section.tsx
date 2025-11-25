"use client"

import { useEffect, useRef, useState } from "react"

export function ShowcaseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.8)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScale(1)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Powerful capabilities for modern teams</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need in one platform to create incredible digital experiences
            </p>
            <ul className="space-y-3">
              {["Clean Design", "Responsive", "Motion UI"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={ref}
            className="relative h-96 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-primary/10 to-accent/10"
            style={{ transform: `scale(${scale})`, transition: "transform 0.8s ease-out" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary to-accent mx-auto opacity-80"></div>
                <p className="text-muted-foreground">Your showcase here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
