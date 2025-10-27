export default function AccountPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>
        
        <div className="grid gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark">
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <p className="text-muted-foreground dark:text-muted-foreground">Guest User</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <p className="text-muted-foreground dark:text-muted-foreground">guest@example.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-border dark:border-border-dark">
            <h2 className="text-2xl font-semibold mb-4">Order History</h2>
            <p className="text-muted-foreground dark:text-muted-foreground">
              No orders yet. Start shopping to see your order history here!
            </p>
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