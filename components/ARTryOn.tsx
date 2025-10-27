'use client'

import { useState, useRef, useEffect } from 'react'
import { Camera, X } from 'lucide-react'

export default function ARTryOn() {
  const [cameraActive, setCameraActive] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false
      })
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setCameraActive(true)
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('Unable to access camera. Please check permissions.')
    }
  }

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
      setCameraActive(false)
    }
  }

  useEffect(() => {
    return () => {
      stopCamera()
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="card overflow-hidden">
        <div className="relative aspect-video bg-muted dark:bg-muted-dark">
          {cameraActive ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
              />
              <button
                onClick={stopCamera}
                className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                aria-label="Stop camera"
              >
                <X className="w-5 h-5" />
              </button>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <Camera className="w-16 h-16 text-muted-foreground dark:text-muted-foreground" />
              <button
                onClick={startCamera}
                className="btn btn-primary"
              >
                Enable Camera
              </button>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground max-w-md text-center">
                Allow camera access to start trying on clothes virtually. Your privacy is protected - no images are stored.
              </p>
            </div>
          )}
        </div>
      </div>

      {cameraActive && (
        <div className="card p-6">
          <h3 className="font-semibold mb-4">Select a Product to Try</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <button
                key={item}
                onClick={() => setSelectedProduct(`product-${item}`)}
                className={`aspect-square rounded-lg border-2 transition-colors ${
                  selectedProduct === `product-${item}`
                    ? 'border-primary'
                    : 'border-border dark:border-border-dark hover:border-primary'
                }`}
              >
                <div className="w-full h-full bg-muted dark:bg-muted-dark rounded-lg flex items-center justify-center">
                  Product {item}
                </div>
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-4">
            Note: This is a demo interface. Full AR functionality would require AR.js or similar library integration with 3D product models.
          </p>
        </div>
      )}
    </div>
  )
}