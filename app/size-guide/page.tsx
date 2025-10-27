import SizeChart from '@/components/SizeChart'

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Size Guide</h1>
          <p className="text-muted-foreground dark:text-muted-foreground text-lg">
            Find your perfect fit with our comprehensive sizing charts and tips
          </p>
        </div>

        <SizeChart />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">How to Measure</h3>
            <ul className="space-y-3 text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>Use a soft measuring tape and measure over light clothing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>Keep the tape snug but not tight against your body</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span>Measure around the fullest part of your chest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">4.</span>
                <span>Measure your natural waist (narrowest part)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">5.</span>
                <span>Measure around the fullest part of your hips</span>
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">Fit Tips</h3>
            <ul className="space-y-3 text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Between sizes? Size up for a relaxed fit, down for a slim fit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Check product descriptions for specific fit notes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Consider the fabric - stretch materials offer more flexibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Read customer reviews for real-world fit feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Use our AR try-on feature for the best size prediction</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}