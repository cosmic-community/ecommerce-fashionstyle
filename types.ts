// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products'
  metadata: {
    description?: string
    price: number
    category?: Category
    sizes?: string[]
    colors?: string[]
    material?: string
    images?: {
      url: string
      imgix_url: string
    }[]
    featured_image?: {
      url: string
      imgix_url: string
    }
    stock_quantity?: number
    discount?: {
      percentage?: number
      start_date?: string
      end_date?: string
    }
    sku?: string
  }
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories'
  metadata: {
    description?: string
    icon?: string
    color?: string
  }
}

// Post interface (Social Feed)
export interface Post extends CosmicObject {
  type: 'posts'
  metadata: {
    user_id: string
    product?: Product
    caption?: string
    likes_count: number
    created_date: string
    post_image?: {
      url: string
      imgix_url: string
    }
  }
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews'
  metadata: {
    product?: Product
    user_id: string
    user_name?: string
    rating: number
    review_text?: string
    review_photos?: string[]
    status: ReviewStatus
    created_date: string
  }
}

// Order interface
export interface Order extends CosmicObject {
  type: 'orders'
  metadata: {
    user_id: string
    items: OrderItem[]
    total_amount: number
    status: OrderStatus
    shipping_address?: string
    payment_method?: string
    created_date: string
  }
}

// User interface
export interface User extends CosmicObject {
  type: 'users'
  metadata: {
    email: string
    name?: string
    password?: string
    role: UserRole
    avatar?: {
      url: string
      imgix_url: string
    }
    created_date: string
  }
}

// Changed: Added client-side user data interface for localStorage
export interface UserData {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: {
    url: string
    imgix_url: string
  }
}

// Wishlist interface
export interface Wishlist extends CosmicObject {
  type: 'wishlists'
  metadata: {
    user_id: string
    products: string[]
    created_date: string
  }
}

// Cart interface
export interface Cart extends CosmicObject {
  type: 'carts'
  metadata: {
    user_id: string
    items: CartItem[]
    updated_date: string
  }
}

// Type literals for select-dropdown values
export type ReviewStatus = 'Pending' | 'Approved' | 'Rejected'
export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'
export type UserRole = 'Customer' | 'Admin'

// Utility types
export interface OrderItem {
  product_id: string
  product_name: string
  quantity: number
  price: number
  size?: string
  color?: string
}

export interface CartItem {
  product_id: string
  quantity: number
  size?: string
  color?: string
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
  skip: number
}

// Helper type for calculating discounted price
export interface DiscountedProduct extends Product {
  discounted_price?: number
  has_active_discount?: boolean
}

// Type guard for products
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products'
}

// Type guard for posts
export function isPost(obj: CosmicObject): obj is Post {
  return obj.type === 'posts'
}

// Type guard for reviews
export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews'
}