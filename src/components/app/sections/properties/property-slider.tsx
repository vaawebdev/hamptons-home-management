'use client'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'

type PropertySliderProps = {
  images: string[]
  alt: string
}

export const PropertySlider: FC<PropertySliderProps> = ({ images, alt }) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const update = () => {
      setAtStart(el.scrollLeft <= 1)
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [images.length])

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="group relative aspect-4/3 overflow-hidden">
      <div
        ref={trackRef}
        className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth bg-gray-200 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <div key={src} className="relative h-full w-full shrink-0 snap-start">
            <Image
              src={src}
              alt={`${alt} — image ${i + 1}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label="Previous image"
        onClick={() => scroll(-1)}
        disabled={atStart}
        className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center bg-white/80 text-black opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-white focus-visible:opacity-100 disabled:cursor-not-allowed disabled:group-hover:opacity-40 disabled:hover:bg-white/80"
      >
        <ChevronLeftIcon className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => scroll(1)}
        disabled={atEnd}
        className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center bg-white/80 text-black opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-white focus-visible:opacity-100 disabled:cursor-not-allowed disabled:group-hover:opacity-40 disabled:hover:bg-white/80"
      >
        <ChevronRightIcon className="size-5" />
      </button>
    </div>
  )
}
