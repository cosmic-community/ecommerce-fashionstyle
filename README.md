# 🛍️ StyleHub - Modern E-Commerce Platform

![App Preview](https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=300&fit=crop&auto=format)

A comprehensive full-stack e-commerce platform for modern fashion retail, featuring social shopping, AR try-on technology, and powerful admin capabilities.

## ✨ Features

- 🎨 **Modern UI/UX** - Carefully curated color palette with seamless light/dark mode
- 👥 **Social Shopping Feed** - Community-driven product discovery with likes and comments
- 📸 **AR Virtual Try-On** - Augmented reality clothing preview using device camera
- 🛡️ **Admin Dashboard** - Complete control over products, users, orders, and analytics
- 💰 **Smart Pricing** - Dynamic discounts with automatic expiration handling
- ⭐ **Product Reviews** - Customer ratings, written reviews, and photo uploads
- 🛒 **Secure Checkout** - Cart management with payment integration ready
- 💝 **Wishlist System** - Save products for later with persistent storage
- 🔍 **Advanced Search** - Global search across products, posts, and categories
- 📱 **Mobile Optimized** - Fully responsive design for all devices
- 🎯 **Personalized Recommendations** - AI-driven product suggestions
- 📏 **Size Guide** - Interactive measurement charts and fit recommendations
- 🔗 **Social Sharing** - Direct sharing to Instagram, Facebook, and X (Twitter)
- 🌐 **SEO Optimized** - Built-in SEO best practices for better visibility

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68ff164b92c9229c30fe7f22&clone_repository=68ff1f5392c9229c30fe7f72)

## 📝 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design and develop a full-stack e-commerce website for selling clothes, using technologies like React for the frontend, Node.js/Express for the backend, and MongoDB for the database (or suggest alternatives if better suited). Prioritize a perfect, modern UI/UX with intuitive navigation, smooth animations, and responsive design across devices. Use a carefully curated color palette (e.g., soft blues/greens for trust, neutrals for balance, and vibrant accents for interactions) to create visual harmony and accessibility (WCAG compliant). Implement both dark and light modes with seamless toggling, automatic detection via user/system preferences, and consistent theming throughout.
>
> The site should include:
>
> - **Admin Panel**: A secure dashboard where admins can control all aspects of the website, including adding/editing/deleting products, managing users, moderating posts and comments, setting discounts with expiration dates, viewing analytics, and handling orders.
>
> - **User Authentication**: A login page for customers with email/password authentication, plus a registration form for new users. Include password recovery and session management for security.
>
> - **Feed Section**: A social-style feed displaying posts of products shared by all customers. Each post shows the product details, and users can react (e.g., like/heart), comment, and perform CRUD operations (create new posts, read/view, update/edit their own, delete their own). Admins can moderate all.
>
> - **Top Liked Section**: A dedicated page or widget showing the most reacted/liked posts from the feed, sorted by reaction count in descending order, updated in real-time or on refresh.
>
> - **Try-On Feature**: An important interactive section where users can open their device's camera, select clothes from the catalog, and use augmented reality (AR) to virtually try them on. The system should overlay the clothing on the user's live camera feed to check fit, size, and style. Integrate libraries like AR.js or similar for this.
>
> - **Product Management**: Products are added via the admin panel with details like name, attributes (e.g., size, color, material), original price, and optional discount (with start/end dates). During the discount period, display the discounted price; after expiration, automatically revert to the original price.
>
> - **Checkout Page**: A secure page for purchasing, where users select product attributes (e.g., size/color), choose quantity, view total (including any discounts), add to cart, and proceed to payment. Handle cart persistence for logged-in users.
>
> - **Product Reviews and Ratings**: Allow customers to leave star ratings (1-5), written reviews, and upload photos of themselves wearing the clothes on product pages. This builds trust and helps with decision-making; admins can moderate reviews.
>
> - **Wishlist Feature**: Logged-in users can add products to a personal wishlist for later viewing or purchase, accessible from their profile.
>
> - **Search Bar**: A global search function on the site to quickly find products, posts, or categories by keywords, attributes (e.g., size, color), or other filters.
>
> - **Mobile Responsiveness**: Ensure the entire website is fully optimized for mobile devices, with responsive design, easy navigation, and touch-friendly elements to support features like camera try-on.
>
> - **Social Media Sharing**: Include buttons on product pages and feed posts to share content directly to platforms like Instagram, Facebook, or X (Twitter) for increased visibility.
>
> - **Size Guide**: A dedicated page or popup with measurement charts, body type tips, and sizing recommendations to help customers select the right fit, integrated with product pages.
>
> - **Personalized Recommendations**: Display suggested products based on user browsing history, past purchases, or feed interactions, using simple algorithms like collaborative filtering.
>
> Ensure the site is user-friendly, with secure data handling (e.g., HTTPS), basic SEO, and a focus on modern aesthetics. Provide the full source code, database schema, and deployment instructions."

### Code Generation Prompt

> "Design and develop a full-stack e-commerce website for selling clothes, using technologies like React for the frontend, Node.js/Express for the backend, and MongoDB for the database (or suggest alternatives if better suited). Prioritize a perfect, modern UI/UX with intuitive navigation, smooth animations, and responsive design across devices. Use a carefully curated color palette (e.g., soft blues/greens for trust, neutrals for balance, and vibrant accents for interactions) to create visual harmony and accessibility (WCAG compliant). Implement both dark and light modes with seamless toggling, automatic detection via user/system preferences, and consistent theming throughout. The site should include: Admin Panel, User Authentication, Feed Section, Top Liked Section, Try-On Feature, Product Management, Checkout Page, Product Reviews and Ratings, Wishlist Feature, Search Bar, Mobile Responsiveness, Social Media Sharing, Size Guide, and Personalized Recommendations."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Frontend**: Next.js 15 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **CMS**: Cosmic (Headless CMS for content management)
- **Authentication**: NextAuth.js (ready for implementation)
- **AR Integration**: AR.js for virtual try-on feature
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 📋 Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account and bucket
- Basic understanding of React and Next.js

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd stylehub-ecommerce
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Cosmic CMS (automatically configured if cloned from Cosmic)
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key

# NextAuth (for production authentication)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-min-32-chars

# Optional: Payment Integration
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

### 4. Run Development Server

```bash
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📚 Cosmic SDK Examples

### Fetching Products with Discounts

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products with active discounts
export async function getDiscountedProducts() {
  try {
    const { objects: products } = await cosmic.objects
      .find({ type: 'products' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    
    const now = new Date()
    
    return products.filter(product => {
      const discount = product.metadata.discount
      const startDate = discount?.start_date ? new Date(discount.start_date) : null
      const endDate = discount?.end_date ? new Date(discount.end_date) : null
      
      return startDate && endDate && now >= startDate && now <= endDate
    })
  } catch (error) {
    console.error('Error fetching discounted products:', error)
    return []
  }
}
```

### Creating a Product Post (Social Feed)

```typescript
// Create a new post in the social feed
export async function createProductPost(userId: string, productId: string, caption: string) {
  try {
    const response = await cosmic.objects.insertOne({
      type: 'posts',
      title: `Post by User ${userId}`,
      metadata: {
        user_id: userId,
        product: productId,
        caption: caption,
        likes_count: 0,
        created_date: new Date().toISOString()
      }
    })
    
    return response.object
  } catch (error) {
    console.error('Error creating post:', error)
    throw error
  }
}
```

### Managing Product Reviews

```typescript
// Add a review to a product
export async function addProductReview(
  productId: string,
  userId: string,
  rating: number,
  review: string,
  photos?: string[]
) {
  try {
    const response = await cosmic.objects.insertOne({
      type: 'reviews',
      title: `Review for Product ${productId}`,
      metadata: {
        product: productId,
        user_id: userId,
        rating: rating,
        review_text: review,
        review_photos: photos || [],
        status: 'Pending',
        created_date: new Date().toISOString()
      }
    })
    
    return response.object
  } catch (error) {
    console.error('Error adding review:', error)
    throw error
  }
}
```

## 🗄️ Cosmic CMS Integration

### Content Model Structure

The application uses the following Cosmic object types:

- **Products**: Clothing items with variants, pricing, and inventory
- **Categories**: Product categorization for navigation
- **Posts**: Social feed entries with product references
- **Reviews**: Customer ratings and feedback
- **Orders**: Purchase history and fulfillment tracking
- **Users**: Customer profiles and preferences
- **Wishlists**: Saved products per user
- **Cart Items**: Active shopping cart entries

### Key Features

- **Depth Queries**: Connected objects are fetched efficiently using `depth(1)`
- **Dynamic Pricing**: Automatic discount calculation based on date ranges
- **Real-time Updates**: Content changes reflect immediately in the UI
- **Image Optimization**: All images use imgix for responsive, optimized delivery

## 📱 Key Features Implementation

### AR Try-On Feature
The virtual try-on feature uses AR.js to overlay clothing on live camera feed. Access it through the "Try On" page where users can:
- Select products from the catalog
- Activate device camera
- See real-time clothing overlay
- Take photos and save favorites

### Social Shopping Feed
Community-driven product discovery where users can:
- Create posts featuring products
- Like and comment on posts
- View trending items
- Share their style

### Admin Dashboard
Comprehensive management interface for:
- Product CRUD operations
- User management
- Order processing
- Analytics and reporting
- Discount management
- Content moderation

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
vercel deploy
```

### Environment Variables for Production

Make sure to set all environment variables in your Vercel dashboard:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
- `NEXTAUTH_URL` (your production URL)
- `NEXTAUTH_SECRET`
- Payment gateway keys (if using Stripe)

## 📖 Additional Resources

- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own purposes.

<!-- README_END -->