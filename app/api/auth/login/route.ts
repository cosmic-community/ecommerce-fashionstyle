import { NextRequest, NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'

// Simple error helper
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find user by email
    let user
    try {
      const response = await cosmic.objects
        .findOne({
          type: 'users',
          'metadata.email': email,
        })
        .props(['id', 'title', 'metadata'])
        .depth(0)

      user = response.object
    } catch (error) {
      if (hasStatus(error) && error.status === 404) {
        return NextResponse.json(
          { error: 'Invalid email or password' },
          { status: 401 }
        )
      }
      throw error
    }

    // In a real application, you would verify the password hash
    // For demo purposes, we're doing a simple comparison
    // NEVER do this in production - use bcrypt or similar
    const storedPassword = user.metadata?.password
    if (storedPassword !== password) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Return user data (excluding password)
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.metadata?.name || user.title,
        email: user.metadata?.email,
        role: user.metadata?.role || 'Customer',
        avatar: user.metadata?.avatar,
      },
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    )
  }
}