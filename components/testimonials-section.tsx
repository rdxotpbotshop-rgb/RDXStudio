"use client"

import { useEffect, useState } from "react"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      text: "This platform transformed how our team works together. Absolutely game-changing.",
      avatar: "👨‍💼",
    },
    {
      name: "Sarah Chen",
      role: "Product Manager",
      text: "The best investment we made for our workflow. Speed and quality are unmatched.",
      avatar: "👩‍💼",
    },
    {
      name: "Marcus Brown",
      role: "Lead Developer",
      text: "Clean, intuitive, and powerful. Exactly what we needed to scale.",
      avatar: "👨‍💻",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="w-full py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-pretty">Loved by teams everywhere</h2>

        <div className="relative h-64 flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 p-8 rounded-2xl border border-border bg-card transition-all duration-500 ${
                index === current ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="space-y-4">
                <p className="text-lg italic text-foreground">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-accent w-8" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
