import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import { calculateDiscountedPrice } from '@/lib/cosmic'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountInfo = calculateDiscountedPrice(product)
  const imageUrl = product.metadata?.featured_image?.imgix_url || product.metadata?.images?.[0]?.imgix_url

  return (
    <div className="card overflow-hidden group animate-scale-in">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-muted dark:bg-muted-dark">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              width={400}
              height={400}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground dark:text-muted-foreground">
              No image
            </div>
          )}
          
          {discountInfo && (
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
              -{discountInfo.discount_percentage}%
            </div>
          )}

          <button
            className="absolute top-3 left-3 p-2 bg-white dark:bg-card-dark rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 dark:hover:bg-muted-dark"
            aria-label="Add to wishlist"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>

        {product.metadata?.category && (
          <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">
            {product.metadata.category.title}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div>
            {discountInfo ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-accent">
                  ${discountInfo.discounted_price}
                </span>
                <span className="text-sm text-muted-foreground dark:text-muted-foreground line-through">
                  ${discountInfo.original_price}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold">
                ${product.metadata?.price || 0}
              </span>
            )}
          </div>

          <button
            className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}