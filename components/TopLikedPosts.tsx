import Link from 'next/link'
import { Heart } from 'lucide-react'
import type { Post } from '@/types'

interface TopLikedPostsProps {
  posts: Post[]
}

export default function TopLikedPosts({ posts }: TopLikedPostsProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => {
        const imageUrl = post.metadata?.post_image?.imgix_url || post.metadata?.product?.metadata?.featured_image?.imgix_url

        return (
          <Link
            key={post.id}
            href={`/feed`}
            className="card overflow-hidden group hover:shadow-lg transition-shadow duration-200"
          >
            <div className="relative aspect-square bg-muted dark:bg-muted-dark">
              {imageUrl ? (
                <img
                  src={`${imageUrl}?w=800&h=800&fit=crop&auto=format,compress`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={400}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground dark:text-muted-foreground">
                  No image
                </div>
              )}
              
              <div className="absolute bottom-3 right-3 bg-white dark:bg-card-dark px-3 py-2 rounded-full shadow-md flex items-center gap-2">
                <Heart className="w-4 h-4 text-accent fill-accent" />
                <span className="font-semibold">{post.metadata?.likes_count || 0}</span>
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm text-muted-foreground dark:text-muted-foreground line-clamp-2">
                {post.metadata?.caption || 'Check out this style!'}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}