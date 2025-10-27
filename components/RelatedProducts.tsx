import { getProductsByCategory } from '@/lib/cosmic'
import ProductGrid from './ProductGrid'
import { Product } from '@/types'

interface RelatedProductsProps {
  categoryId?: string
  currentProductId: string
}

export default async function RelatedProducts({ categoryId, currentProductId }: RelatedProductsProps) {
  if (!categoryId) {
    return null
  }

  const products = await getProductsByCategory(categoryId)
  const relatedProducts = products
    .filter((p: Product) => p.id !== currentProductId)
    .slice(0, 4)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section className="border-t border-border dark:border-border-dark pt-12">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <ProductGrid products={relatedProducts} />
    </section>
  )
}