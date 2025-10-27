'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// Changed: Added proper interface for user data
interface UserData {
  id: string
  name: string
  email: string
  role: string
  avatar?: {
    url: string
    imgix_url: string
  }
}

export default function AccountPage() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Changed: Load actual user data from localStorage
    const userData = localStorage.getItem('user')
    
    if (!userData) {
      // Changed: Redirect to login if no user data found
      router.push('/login')
      return
    }

    try {
      const parsedUser = JSON.parse(userData) as UserData
      setUser(parsedUser)
    } catch (error) {
      console.error('Error parsing user data:', error)
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }, [router])

  // Changed: Show loading state
  if (loading) {
    return (
      <div className="min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground dark:text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  // Changed: Show error state if no user
  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>
        
        <div className="grid gap-6">
          {/* Changed: Display actual user data */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark">
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <p className="text-muted-foreground dark:text-muted-foreground">{user.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <p className="text-muted-foreground dark:text-muted-foreground">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Role</label>
                <p className="text-muted-foreground dark:text-muted-foreground">{user.role}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark">
            <h2 className="text-2xl font-semibold mb-4">Order History</h2>
            <p className="text-muted-foreground dark:text-muted-foreground">
              No orders yet. Start shopping to see your order history here!
            </p>
            <Link 
              href="/products"
              className="inline-block mt-4 text-primary hover:underline font-medium"
            >
              Browse Products →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark">
            <h2 className="text-2xl font-semibold mb-4">Saved Addresses</h2>
            <p className="text-muted-foreground dark:text-muted-foreground">
              No saved addresses yet.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark">
            <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
            <p className="text-muted-foreground dark:text-muted-foreground">
              No saved payment methods yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}