"use client"

import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg"></div>
            <span className="font-bold text-xl">Nexus</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Product
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Customers
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Templates
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm px-4 py-2 rounded-lg hover:bg-muted transition-colors">
              Log in
            </button>
            <button className="text-sm px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all duration-300">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
