'use client'

import Link from 'next/link'
import { Menu, Search, ShoppingCart, Heart, User, Sun, Moon, LogOut, Shield } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from '@/lib/theme'
import { useRouter } from 'next/navigation'
import { UserData } from '@/types'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<UserData | null>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()
  const router = useRouter()

  useEffect(() => {
    // Changed: Load user data with proper typing
    const userData = localStorage.getItem('user')
    if (userData) {
      try {
        setUser(JSON.parse(userData) as UserData)
      } catch (error) {
        console.error('Error parsing user data:', error)
        localStorage.removeItem('user')
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setUserMenuOpen(false)
    // Changed: Use window.location for consistency
    window.location.href = '/'
  }

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

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="p-2 rounded-lg hover:bg-muted dark:hover:bg-muted-dark transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-border dark:border-border-dark py-2">
                  {user ? (
                    <>
                      <div className="px-4 py-2 border-b border-border dark:border-border-dark">
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                      {user.role === 'Admin' && (
                        <Link
                          href="/admin"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-muted dark:hover:bg-muted-dark transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <Shield className="w-4 h-4" />
                          Admin Panel
                        </Link>
                      )}
                      <Link
                        href="/account"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-muted dark:hover:bg-muted-dark transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        My Account
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-muted dark:hover:bg-muted-dark transition-colors text-left text-red-600 dark:text-red-400"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="block px-4 py-2 hover:bg-muted dark:hover:bg-muted-dark transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className="block px-4 py-2 hover:bg-muted dark:hover:bg-muted-dark transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

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