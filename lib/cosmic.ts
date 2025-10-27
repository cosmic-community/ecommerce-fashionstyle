import { createBucketClient } from '@cosmicjs/sdk'
import { Product, Post, Review } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Get all products
export async function getProducts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    // Changed: More detailed error logging
    console.error('Failed to fetch products:', error)
    return [] // Changed: Return empty array instead of throwing
  }
}

// Get single product by slug
export async function getProduct(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'products', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    // Changed: More detailed error logging
    console.error(`Failed to fetch product ${slug}:`, error)
    return null // Changed: Return null instead of throwing
  }
}

// Get products by category
export async function getProductsByCategory(categoryId: string) {
  try {
    const response = await cosmic.objects
      .find({
        type: 'products',
        'metadata.category': categoryId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    // Changed: More detailed error logging
    console.error(`Failed to fetch products by category ${categoryId}:`, error)
    return [] // Changed: Return empty array instead of throwing
  }
}

// Get all categories
export async function getCategories() {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    // Changed: More detailed error logging
    console.error('Failed to fetch categories:', error)
    return [] // Changed: Return empty array instead of throwing
  }
}

// Get all posts for social feed
export async function getPosts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    // Manual sorting by created_date (newest first)
    return response.objects.sort((a: Post, b: Post) => {
      const dateA = new Date(a.metadata?.created_date || '').getTime()
      const dateB = new Date(b.metadata?.created_date || '').getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    // Changed: More detailed error logging
    console.error('Failed to fetch posts:', error)
    return [] // Changed: Return empty array instead of throwing
  }
}

// Get top liked posts
export async function getTopLikedPosts(limit: number = 10) {
  try {
    const response = await cosmic.objects
      .find({ type: 'posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    // Manual sorting by likes_count (descending)
    return response.objects
      .sort((a: Post, b: Post) => {
        const likesA = a.metadata?.likes_count || 0
        const likesB = b.metadata?.likes_count || 0
        return likesB - likesA
      })
      .slice(0, limit)
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    // Changed: More detailed error logging
    console.error('Failed to fetch top liked posts:', error)
    return [] // Changed: Return empty array instead of throwing
  }
}

// Get reviews for a product
export async function getProductReviews(productId: string) {
  try {
    const response = await cosmic.objects
      .find({
        type: 'reviews',
        'metadata.product': productId,
        'metadata.status': 'Approved'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    // Manual sorting by created_date (newest first)
    return response.objects.sort((a: Review, b: Review) => {
      const dateA = new Date(a.metadata?.created_date || '').getTime()
      const dateB = new Date(b.metadata?.created_date || '').getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    // Changed: More detailed error logging
    console.error(`Failed to fetch reviews for product ${productId}:`, error)
    return [] // Changed: Return empty array instead of throwing
  }
}

// Search products
export async function searchProducts(query: string) {
  try {
    const response = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    // Client-side filtering for search
    const searchTerm = query.toLowerCase()
    return response.objects.filter((product: Product) => {
      const title = product.title.toLowerCase()
      const description = product.metadata?.description?.toLowerCase() || ''
      const category = product.metadata?.category?.title?.toLowerCase() || ''
      
      return title.includes(searchTerm) || 
             description.includes(searchTerm) || 
             category.includes(searchTerm)
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    // Changed: More detailed error logging
    console.error(`Failed to search products with query "${query}":`, error)
    return [] // Changed: Return empty array instead of throwing
  }
}

// Calculate discounted price for a product
export function calculateDiscountedPrice(product: Product) {
  const now = new Date()
  const discount = product.metadata?.discount
  
  if (!discount || !discount.percentage) {
    return null
  }
  
  const startDate = discount.start_date ? new Date(discount.start_date) : null
  const endDate = discount.end_date ? new Date(discount.end_date) : null
  
  // Check if discount is active
  const isActive = startDate && endDate && now >= startDate && now <= endDate
  
  if (!isActive) {
    return null
  }
  
  const originalPrice = product.metadata?.price || 0
  const discountAmount = (originalPrice * discount.percentage) / 100
  const discountedPrice = originalPrice - discountAmount
  
  return {
    original_price: originalPrice,
    discounted_price: Math.round(discountedPrice * 100) / 100,
    discount_percentage: discount.percentage,
    discount_end_date: endDate
  }
}