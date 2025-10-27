import Link from 'next/link'
import type { Category } from '@/types'

interface FeaturedCategoriesProps {
  categories: Category[]
}

export default function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/products?category=${category.slug}`}
          className="card p-6 text-center hover:shadow-lg transition-shadow duration-200 group"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
            {category.metadata?.icon || '👕'}
          </div>
          <h3 className="font-semibold group-hover:text-primary transition-colors">
            {category.title}
          </h3>
        </Link>
      ))}
    </div>
  )
}