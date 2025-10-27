import { getProduct, getProductReviews, calculateDiscountedPrice } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ProductImages from '@/components/ProductImages'
import ProductDetails from '@/components/ProductDetails'
import ProductReviews from '@/components/ProductReviews'
import RelatedProducts from '@/components/RelatedProducts'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  const reviews = await getProductReviews(product.id)
  const discountInfo = calculateDiscountedPrice(product)

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductImages images={product.metadata?.images || []} />
          <ProductDetails product={product} discountInfo={discountInfo} />
        </div>

        <ProductReviews productId={product.id} reviews={reviews} />

        <RelatedProducts categoryId={product.metadata?.category?.id} currentProductId={product.id} />
      </div>
    </div>
  )
}