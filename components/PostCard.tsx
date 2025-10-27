'use client'

import { Heart, MessageCircle, Share2 } from 'lucide-react'
import type { Post } from '@/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const imageUrl = post.metadata?.post_image?.imgix_url || post.metadata?.product?.metadata?.featured_image?.imgix_url
  const likesCount = post.metadata?.likes_count || 0

  return (
    <article className="card overflow-hidden animate-fade-in">
      <div className="p-4 border-b border-border dark:border-border-dark">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
            U
          </div>
          <div>
            <p className="font-semibold">User {post.metadata?.user_id?.slice(0, 8)}</p>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
              {new Date(post.metadata?.created_date || '').toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {imageUrl && (
        <div className="relative aspect-square bg-muted dark:bg-muted-dark">
          <img
            src={`${imageUrl}?w=1200&h=1200&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-full object-cover"
            width={600}
            height={600}
          />
        </div>
      )}

      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <button className="flex items-center gap-2 hover:text-accent transition-colors">
            <Heart className="w-6 h-6" />
            <span className="font-semibold">{likesCount}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-primary transition-colors">
            <MessageCircle className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-2 hover:text-secondary transition-colors ml-auto">
            <Share2 className="w-6 h-6" />
          </button>
        </div>

        {post.metadata?.caption && (
          <p className="text-sm mb-2">
            <span className="font-semibold mr-2">User {post.metadata.user_id.slice(0, 8)}</span>
            {post.metadata.caption}
          </p>
        )}

        {post.metadata?.product && (
          <p className="text-sm text-muted-foreground dark:text-muted-foreground">
            Product: <span className="text-primary">{post.metadata.product.title}</span>
          </p>
        )}
      </div>
    </article>
  )
}