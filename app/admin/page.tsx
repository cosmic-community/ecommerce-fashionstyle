'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Package, Users, ShoppingCart, Star, TrendingUp, Settings } from 'lucide-react'

interface DashboardStats {
  totalProducts: number
  totalUsers: number
  totalOrders: number
  totalReviews: number
  revenue: number
}

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    totalReviews: 0,
    revenue: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in and is admin
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
      return
    }

    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== 'Admin') {
      router.push('/account')
      return
    }

    setUser(parsedUser)
    loadDashboardStats()
  }, [router])

  const loadDashboardStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Failed to load dashboard stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-semibold">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Welcome back, {user?.name || 'Admin'}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark">
            <div className="flex items-center justify-between mb-4">
              <Package className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">{stats.totalProducts}</span>
            </div>
            <h3 className="text-muted-foreground dark:text-muted-foreground">Total Products</h3>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">{stats.totalUsers}</span>
            </div>
            <h3 className="text-muted-foreground dark:text-muted-foreground">Total Users</h3>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark">
            <div className="flex items-center justify-between mb-4">
              <ShoppingCart className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">{stats.totalOrders}</span>
            </div>
            <h3 className="text-muted-foreground dark:text-muted-foreground">Total Orders</h3>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">${stats.revenue.toFixed(2)}</span>
            </div>
            <h3 className="text-muted-foreground dark:text-muted-foreground">Total Revenue</h3>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/products"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark hover:shadow-lg transition-shadow"
          >
            <Package className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manage Products</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Add, edit, or remove products from your catalog
            </p>
          </Link>

          <Link
            href="/admin/orders"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark hover:shadow-lg transition-shadow"
          >
            <ShoppingCart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manage Orders</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              View and process customer orders
            </p>
          </Link>

          <Link
            href="/admin/users"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark hover:shadow-lg transition-shadow"
          >
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manage Users</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              View and manage user accounts
            </p>
          </Link>

          <Link
            href="/admin/reviews"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark hover:shadow-lg transition-shadow"
          >
            <Star className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Moderate Reviews</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Approve or reject customer reviews
            </p>
          </Link>

          <Link
            href="/admin/posts"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark hover:shadow-lg transition-shadow"
          >
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manage Posts</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Moderate social feed posts and content
            </p>
          </Link>

          <Link
            href="/admin/settings"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark hover:shadow-lg transition-shadow"
          >
            <Settings className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Settings</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Configure store settings and preferences
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}