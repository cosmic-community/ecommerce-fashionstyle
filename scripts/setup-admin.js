const { createBucketClient } = require('@cosmicjs/sdk')

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG,
  readKey: process.env.COSMIC_READ_KEY,
  writeKey: process.env.COSMIC_WRITE_KEY,
})

async function setupAdmin() {
  try {
    console.log('Setting up admin user...')
    console.log('Bucket slug:', process.env.COSMIC_BUCKET_SLUG)
    
    const adminEmail = 'admin@panel.com'
    const adminPassword = 'Administhebest123'
    
    // Check if admin user already exists
    let existingAdmin = null
    try {
      console.log('Searching for existing admin user with email:', adminEmail)
      
      const response = await cosmic.objects
        .findOne({
          type: 'users',
          'metadata.email': adminEmail,
        })
        .props(['id', 'title', 'metadata'])
      
      existingAdmin = response.object
      console.log('Existing admin found:', existingAdmin ? 'Yes' : 'No')
    } catch (error) {
      // Admin doesn't exist, we'll create one
      console.log('No existing admin user found, creating new one...')
      console.log('Error details:', error.message || error)
    }
    
    if (existingAdmin) {
      // Update existing admin user
      console.log('Updating existing admin user with ID:', existingAdmin.id)
      
      await cosmic.objects.updateOne(existingAdmin.id, {
        title: 'Admin User',
        metadata: {
          name: 'Admin User',
          email: adminEmail,
          password: adminPassword,
          role: 'Admin',
        },
      })
      
      console.log('✅ Admin user updated successfully!')
      console.log(`Email: ${adminEmail}`)
      console.log(`Password: ${adminPassword}`)
      console.log(`Role: Admin`)
    } else {
      // Create new admin user
      console.log('Creating new admin user...')
      
      const newUser = await cosmic.objects.insertOne({
        type: 'users',
        title: 'Admin User',
        metadata: {
          name: 'Admin User',
          email: adminEmail,
          password: adminPassword,
          role: 'Admin',
          created_date: new Date().toISOString(),
        },
      })
      
      console.log('✅ Admin user created successfully!')
      console.log('New user ID:', newUser.object.id)
      console.log(`Email: ${adminEmail}`)
      console.log(`Password: ${adminPassword}`)
      console.log(`Role: Admin`)
    }
    
    // Verify the user was created/updated correctly
    console.log('\nVerifying admin user...')
    const verifyResponse = await cosmic.objects
      .findOne({
        type: 'users',
        'metadata.email': adminEmail,
      })
      .props(['id', 'title', 'metadata'])
    
    console.log('Verification successful!')
    console.log('User data:', JSON.stringify(verifyResponse.object, null, 2))
    
  } catch (error) {
    console.error('❌ Error setting up admin user:', error)
    console.error('Error details:', error.message || error)
    if (error.stack) {
      console.error('Stack trace:', error.stack)
    }
    process.exit(1)
  }
}

setupAdmin()