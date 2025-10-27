import { getTopLikedPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import { TrendingUp } from 'lucide-react'
import { Post } from '@/types'

export const revalidate = 60

export default async function TopLikedPage() {
  const posts = await getTopLikedPosts(20)

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <TrendingUp className="w-10 h-10 text-primary" />
          <div>
            <h1 className="text-4xl font-bold mb-2">Top Liked Styles</h1>
            <p className="text-muted-foreground dark:text-muted-foreground">
              The most popular posts from our style community
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground dark:text-muted-foreground text-lg">
                No posts available yet
              </p>
            </div>
          ) : (
            posts.map((post: Post, index: number) => (
              <div key={post.id} className="relative">
                <div className="absolute -left-12 top-8 hidden lg:block">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <PostCard post={post} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}