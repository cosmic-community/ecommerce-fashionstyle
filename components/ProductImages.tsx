'use client'

import { useState } from 'react'

interface ProductImagesProps {
  images: Array<{
    url: string
    imgix_url: string
  }>
}

export default function ProductImages({ images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-muted dark:bg-muted-dark rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground dark:text-muted-foreground">No images available</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-muted dark:bg-muted-dark rounded-lg overflow-hidden">
        <img
          src={`${images[selectedImage].imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
          alt="Product image"
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index
                  ? 'border-primary'
                  : 'border-border dark:border-border-dark hover:border-primary'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                alt={`Product thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                width={200}
                height={200}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}