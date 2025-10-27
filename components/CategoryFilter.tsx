'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import type { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')

  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <div className="card p-6">
      <h3 className="font-semibold mb-4">Categories</h3>
      <div className="space-y-2">
        <Link
          href="/products"
          className={`block px-4 py-2 rounded-lg transition-colors ${
            !currentCategory
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-muted dark:hover:bg-muted-dark'
          }`}
        >
          All Products
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${category.slug}`}
            className={`block px-4 py-2 rounded-lg transition-colors ${
              currentCategory === category.slug
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted dark:hover:bg-muted-dark'
            }`}
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  )
}