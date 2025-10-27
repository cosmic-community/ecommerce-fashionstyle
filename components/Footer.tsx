import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted dark:bg-muted-dark border-t border-border dark:border-border-dark mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">StyleHub</h3>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
              Your destination for modern fashion with cutting-edge AR try-on technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=women" className="hover:text-primary transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/products?category=men" className="hover:text-primary transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="hover:text-primary transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li>
                <Link href="/try-on" className="hover:text-primary transition-colors">
                  AR Try-On
                </Link>
              </li>
              <li>
                <Link href="/feed" className="hover:text-primary transition-colors">
                  Style Feed
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-primary transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-primary transition-colors">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-background dark:hover:bg-background-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-background dark:hover:bg-background-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-background dark:hover:bg-background-dark transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
              Follow us for the latest trends and exclusive offers
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border dark:border-border-dark text-center text-sm text-muted-foreground dark:text-muted-foreground">
          <p>&copy; {currentYear} StyleHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}