import ARTryOn from '@/components/ARTryOn'

export default function TryOnPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Virtual Try-On</h1>
          <p className="text-muted-foreground dark:text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the future of shopping. Use your camera to see how our clothes look on you in real-time with augmented reality.
          </p>
        </div>

        <ARTryOn />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📸</span>
            </div>
            <h3 className="font-semibold mb-2">Enable Camera</h3>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
              Allow camera access to start your virtual try-on experience
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👕</span>
            </div>
            <h3 className="font-semibold mb-2">Select Clothes</h3>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
              Choose from our catalog to see items overlay on your live feed
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-semibold mb-2">Try Different Styles</h3>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
              Experiment with sizes, colors, and styles to find your perfect look
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}