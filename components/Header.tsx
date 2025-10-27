'use client'

import Link from 'next/link'
import { Menu, Search, ShoppingCart, Heart, User, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '@/lib/theme'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <header className="sticky top-0 z-40 bg-background dark:bg-background-dark border-b border-border dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            StyleHub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/feed" className="hover:text-primary transition-colors">
              Feed
            </Link>
            <Link href="/top-liked" className="hover:text-primary transition-colors">
              Trending
            </Link>
            <Link href="/try-on" className="hover:text-primary transition-colors">
              Try On
            </Link>
            <Link href="/size-guide" className="hover:text-primary transition-colors">
              Size Guide
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <Link
              href="/search"
              className="p-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>

            <Link
              href="/wishlist"
              className="p-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </Link>

            <Link
              href="/cart"
              className="p-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            <Link
              href="/account"
              className="p-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border dark:border-border-dark">
            <div className="flex flex-col gap-4">
              <Link
                href="/products"
                className="hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/feed"
                className="hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Feed
              </Link>
              <Link
                href="/top-liked"
                className="hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trending
              </Link>
              <Link
                href="/try-on"
                className="hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try On
              </Link>
              <Link
                href="/size-guide"
                className="hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Size Guide
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}