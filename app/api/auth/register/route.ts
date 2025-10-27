import { NextRequest, NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'

// Changed: Add runtime config to ensure proper edge handling
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    try {
      const existingUser = await cosmic.objects
        .findOne({
          type: 'users',
          'metadata.email': email,
        })
        .props(['id'])

      if (existingUser.object) {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 409 }
        )
      }
    } catch (error) {
      // User doesn't exist, continue with registration
    }

    // Create new user
    // IMPORTANT: In production, hash the password with bcrypt or similar
    const response = await cosmic.objects.insertOne({
      type: 'users',
      title: name,
      metadata: {
        name: name,
        email: email,
        password: password, // In production, hash this!
        role: 'Customer',
        created_date: new Date().toISOString(),
      },
    })

    // Return user data (excluding password)
    return NextResponse.json({
      user: {
        id: response.object.id,
        name: name,
        email: email,
        role: 'Customer',
      },
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'An error occurred during registration' },
      { status: 500 }
    )
  }
}