import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/5 dark:via-secondary/5 dark:to-accent/5 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Fashion Meets Innovation
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground mb-8 text-balance">
              Experience the future of online shopping with our AR try-on technology. 
              See how clothes look on you before you buy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link href="/try-on" className="btn btn-secondary">
                Try AR Feature
              </Link>
            </div>
          </div>

          <div className="relative h-96 lg:h-[500px] animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=1000&fit=crop&auto=format,compress"
              alt="Fashion showcase"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              width={600}
              height={500}
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card-dark p-6 rounded-xl shadow-xl border border-border dark:border-border-dark">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  AR
                </div>
                <div>
                  <p className="font-semibold">Virtual Try-On</p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                    See before you buy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}