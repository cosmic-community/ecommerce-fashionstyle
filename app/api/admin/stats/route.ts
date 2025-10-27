import { NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'

// Simple error helper
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function GET() {
  try {
    // Fetch all necessary data in parallel
    const [productsRes, usersRes, ordersRes, reviewsRes] = await Promise.allSettled([
      cosmic.objects.find({ type: 'products' }).props(['id']),
      cosmic.objects.find({ type: 'users' }).props(['id']),
      cosmic.objects.find({ type: 'orders' }).props(['id', 'metadata']),
      cosmic.objects.find({ type: 'reviews' }).props(['id']),
    ])

    // Extract counts
    const totalProducts = productsRes.status === 'fulfilled' ? productsRes.value.objects.length : 0
    const totalUsers = usersRes.status === 'fulfilled' ? usersRes.value.objects.length : 0
    const totalOrders = ordersRes.status === 'fulfilled' ? ordersRes.value.objects.length : 0
    const totalReviews = reviewsRes.status === 'fulfilled' ? reviewsRes.value.objects.length : 0

    // Calculate revenue
    let revenue = 0
    if (ordersRes.status === 'fulfilled') {
      revenue = ordersRes.value.objects.reduce((sum, order) => {
        return sum + (order.metadata?.total_amount || 0)
      }, 0)
    }

    return NextResponse.json({
      totalProducts,
      totalUsers,
      totalOrders,
      totalReviews,
      revenue,
    })
  } catch (error) {
    console.error('Failed to fetch admin stats:', error)
    return NextResponse.json(
      {
        totalProducts: 0,
        totalUsers: 0,
        totalOrders: 0,
        totalReviews: 0,
        revenue: 0,
      },
      { status: 200 }
    )
  }
}