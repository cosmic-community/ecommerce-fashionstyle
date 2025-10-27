'use client'

import { useState } from 'react'
import { Heart, Share2, ShoppingCart, Ruler } from 'lucide-react'
import type { Product } from '@/types'

interface ProductDetailsProps {
  product: Product
  discountInfo: any
}

export default function ProductDetails({ product, discountInfo }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [quantity, setQuantity] = useState(1)

  const sizes = product.metadata?.sizes || []
  const colors = product.metadata?.colors || []
  const price = discountInfo ? discountInfo.discounted_price : product.metadata?.price || 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.title}</h1>
        {product.metadata?.category && (
          <p className="text-muted-foreground dark:text-muted-foreground">
            {product.metadata.category.title}
          </p>
        )}
      </div>

      <div className="flex items-center gap-4">
        {discountInfo ? (
          <>
            <span className="text-3xl font-bold text-accent">${price}</span>
            <span className="text-xl text-muted-foreground dark:text-muted-foreground line-through">
              ${discountInfo.original_price}
            </span>
            <span className="badge bg-accent text-accent-foreground">
              Save {discountInfo.discount_percentage}%
            </span>
          </>
        ) : (
          <span className="text-3xl font-bold">${price}</span>
        )}
      </div>

      {product.metadata?.description && (
        <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
          {product.metadata.description}
        </p>
      )}

      {sizes.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="font-semibold">Size</label>
            <a href="/size-guide" className="text-sm text-primary hover:underline flex items-center gap-1">
              <Ruler className="w-4 h-4" />
              Size Guide
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-lg transition-colors ${
                  selectedSize === size
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border dark:border-border-dark hover:border-primary'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {colors.length > 0 && (
        <div>
          <label className="font-semibold mb-3 block">Color</label>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 border rounded-lg transition-colors ${
                  selectedColor === color
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border dark:border-border-dark hover:border-primary'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="font-semibold mb-3 block">Quantity</label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 border border-border dark:border-border-dark rounded-lg hover:bg-muted dark:hover:bg-muted-dark transition-colors"
          >
            -
          </button>
          <span className="font-semibold text-lg w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 border border-border dark:border-border-dark rounded-lg hover:bg-muted dark:hover:bg-muted-dark transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="btn btn-primary flex-1 flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
        <button className="btn border border-border dark:border-border-dark hover:bg-muted dark:hover:bg-muted-dark p-3">
          <Heart className="w-5 h-5" />
        </button>
        <button className="btn border border-border dark:border-border-dark hover:bg-muted dark:hover:bg-muted-dark p-3">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {product.metadata?.material && (
        <div className="border-t border-border dark:border-border-dark pt-6">
          <h3 className="font-semibold mb-2">Material</h3>
          <p className="text-muted-foreground dark:text-muted-foreground">
            {product.metadata.material}
          </p>
        </div>
      )}
    </div>
  )
}