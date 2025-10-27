import { getProducts, getTopLikedPosts, getCategories } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import FeaturedCategories from '@/components/FeaturedCategories'
import TopLikedPosts from '@/components/TopLikedPosts'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  const [products, categories, topPosts] = await Promise.all([
    getProducts(),
    getCategories(),
    getTopLikedPosts(6)
  ])

  // Get featured products (first 8)
  const featuredProducts = products.slice(0, 8)

  return (
    <div className="animate-fade-in">
      <Hero />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground dark:text-muted-foreground text-lg">
            Discover your style across our curated collections
          </p>
        </div>
        <FeaturedCategories categories={categories} />
      </section>

      <section className="py-16 px-4 bg-muted dark:bg-muted-dark">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground dark:text-muted-foreground text-lg">
              Check out our latest and most popular items
            </p>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Trending Styles</h2>
          <p className="text-muted-foreground dark:text-muted-foreground text-lg">
            See what's popular in our community
          </p>
        </div>
        <TopLikedPosts posts={topPosts} />
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Try Before You Buy</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience our revolutionary AR try-on feature. See how clothes look on you before making a purchase.
          </p>
          <a
            href="/try-on"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Try It Now
          </a>
        </div>
      </section>
    </div>
  )
}