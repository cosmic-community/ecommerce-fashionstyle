import { Star } from 'lucide-react'
import type { Review } from '@/types'

interface ProductReviewsProps {
  productId: string
  reviews: Review[]
}

export default function ProductReviews({ productId, reviews }: ProductReviewsProps) {
  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + (review.metadata?.rating || 0), 0) / reviews.length
    : 0

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ))
  }

  return (
    <section className="border-t border-border dark:border-border-dark pt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">{averageRating.toFixed(1)}</span>
            <div className="flex">{renderStars(Math.round(averageRating))}</div>
          </div>
          <span className="text-muted-foreground dark:text-muted-foreground">
            Based on {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground dark:text-muted-foreground">
              No reviews yet. Be the first to review this product!
            </p>
          </div>
        ) : (
          reviews.map((review) => (
            <article key={review.id} className="card p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold">{review.metadata?.user_name || 'Anonymous'}</p>
                  <div className="flex mt-1">
                    {renderStars(review.metadata?.rating || 0)}
                  </div>
                </div>
                <time className="text-sm text-muted-foreground dark:text-muted-foreground">
                  {new Date(review.metadata?.created_date || '').toLocaleDateString()}
                </time>
              </div>
              {review.metadata?.review_text && (
                <p className="text-muted-foreground dark:text-muted-foreground mb-3">
                  {review.metadata.review_text}
                </p>
              )}
              {review.metadata?.review_photos && review.metadata.review_photos.length > 0 && (
                <div className="flex gap-2 mt-4">
                  {review.metadata.review_photos.map((photo, index) => (
                    <img
                      key={index}
                      src={`${photo}?w=200&h=200&fit=crop&auto=format,compress`}
                      alt={`Review photo ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg"
                      width={100}
                      height={100}
                    />
                  ))}
                </div>
              )}
            </article>
          ))
        )}
      </div>
    </section>
  )
}