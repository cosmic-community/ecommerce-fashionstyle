import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function WishlistPage() {
  // In a real app, this would fetch wishlist items from state management or API
  const wishlistItems: any[] = []

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-24 h-24 mx-auto mb-6 text-muted-foreground dark:text-muted-foreground" />
          <h1 className="text-4xl font-bold mb-4">Your Wishlist is Empty</h1>
          <p className="text-muted-foreground dark:text-muted-foreground text-lg mb-8">
            Save your favorite items here to easily find them later.
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Wishlist</h1>
          <p className="text-muted-foreground dark:text-muted-foreground">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Wishlist items would be rendered here */}
        </div>
      </div>
    </div>
  )
}