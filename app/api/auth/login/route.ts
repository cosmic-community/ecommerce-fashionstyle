import { NextRequest, NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'

// Changed: Add runtime config for consistency with register route
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Simple error helper
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    console.log('Login attempt for email:', email) // Debug log

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find user by email
    let user
    try {
      console.log('Searching for user with email:', email) // Debug log
      
      const response = await cosmic.objects
        .findOne({
          type: 'users',
          'metadata.email': email,
        })
        .props(['id', 'title', 'metadata'])
        .depth(0)

      user = response.object
      console.log('User found:', user ? 'Yes' : 'No') // Debug log
      
      if (user) {
        console.log('User metadata:', JSON.stringify(user.metadata, null, 2)) // Debug log
      }
    } catch (error) {
      console.error('Error finding user:', error) // Debug log
      
      if (hasStatus(error) && error.status === 404) {
        return NextResponse.json(
          { error: 'Invalid email or password' },
          { status: 401 }
        )
      }
      throw error
    }

    // Changed: Add null check for user
    if (!user) {
      console.log('User not found in database') // Debug log
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // In a real application, you would verify the password hash
    // For demo purposes, we're doing a simple comparison
    // NEVER do this in production - use bcrypt or similar
    const storedPassword = user.metadata?.password
    
    console.log('Stored password exists:', !!storedPassword) // Debug log
    console.log('Provided password:', password) // Debug log
    console.log('Stored password:', storedPassword) // Debug log
    console.log('Passwords match:', storedPassword === password) // Debug log
    
    if (storedPassword !== password) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Changed: Return complete user data with proper structure
    const userData = {
      user: {
        id: user.id,
        name: user.metadata?.name || user.title,
        email: user.metadata?.email,
        role: user.metadata?.role || 'Customer',
        avatar: user.metadata?.avatar,
      },
    }
    
    console.log('Login successful, returning user data:', JSON.stringify(userData, null, 2)) // Debug log
    
    return NextResponse.json(userData)
  } catch (error) {
    console.error('Login error (full):', error) // Enhanced debug log
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace') // Debug log
    
    return NextResponse.json(
      { 
        error: 'An error occurred during login',
        details: error instanceof Error ? error.message : 'Unknown error' // Changed: Add error details for debugging
      },
      { status: 500 }
    )
  }
}