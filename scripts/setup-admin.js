const { createBucketClient } = require('@cosmicjs/sdk')

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG,
  readKey: process.env.COSMIC_READ_KEY,
  writeKey: process.env.COSMIC_WRITE_KEY,
})

async function setupAdmin() {
  try {
    console.log('Setting up admin user...')
    
    const adminEmail = 'admin@panel.com'
    const adminPassword = 'Administhebest123'
    
    // Check if admin user already exists
    let existingAdmin = null
    try {
      const response = await cosmic.objects
        .findOne({
          type: 'users',
          'metadata.email': adminEmail,
        })
        .props(['id', 'title', 'metadata'])
      
      existingAdmin = response.object
    } catch (error) {
      // Admin doesn't exist, we'll create one
      console.log('No existing admin user found, creating new one...')
    }
    
    if (existingAdmin) {
      // Update existing admin user
      console.log('Updating existing admin user...')
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
    } else {
      // Create new admin user
      console.log('Creating new admin user...')
      await cosmic.objects.insertOne({
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
      console.log(`Email: ${adminEmail}`)
      console.log(`Password: ${adminPassword}`)
    }
    
  } catch (error) {
    console.error('❌ Error setting up admin user:', error)
    process.exit(1)
  }
}

setupAdmin()