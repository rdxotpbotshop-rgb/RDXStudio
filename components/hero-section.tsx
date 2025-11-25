"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50"></div>

      {/* Animated 3D sphere */}
      <div className="absolute top-1/4 right-10 w-96 h-96 animate-float">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl opacity-60"></div>
      </div>

      <div className="absolute bottom-1/4 left-10 w-80 h-80 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8 animate-fade-in">
        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary">
          New: Infinite Canvas
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-pretty">
          Super fast motion for every team
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Create, Build, and Scale with modern web technology that empowers your vision
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-accent hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Try for free
          </button>
          <button className="px-8 py-4 rounded-full border border-border bg-transparent hover:bg-muted transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="pt-8 text-sm text-muted-foreground">
          Over 20,000 creative teams use Nexus to create stunning experiences
        </div>
      </div>
    </section>
  )
}
