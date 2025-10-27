'use client'

import { Plus } from 'lucide-react'

export default function CreatePostButton() {
  const handleClick = () => {
    // This would open a modal or redirect to create post page
    alert('Create post functionality would be implemented here')
  }

  return (
    <button
      onClick={handleClick}
      className="btn btn-primary flex items-center gap-2"
    >
      <Plus className="w-5 h-5" />
      Create Post
    </button>
  )
}