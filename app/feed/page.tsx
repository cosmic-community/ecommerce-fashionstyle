import { getPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import CreatePostButton from '@/components/CreatePostButton'
import { Post } from '@/types'

export const revalidate = 30

export default async function FeedPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Style Feed</h1>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Share and discover amazing styles from our community
            </p>
          </div>
          <CreatePostButton />
        </div>

        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground dark:text-muted-foreground text-lg">
                No posts yet. Be the first to share your style!
              </p>
            </div>
          ) : (
            posts.map((post: Post) => (
              <PostCard key={post.id} post={post} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}