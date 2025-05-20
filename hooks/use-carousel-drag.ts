import { useRef, useState, useCallback, RefObject } from "react"

interface UseCarouselDragProps {
  containerRef: RefObject<HTMLElement>
  onDragLeft: () => void
  onDragRight: () => void
  threshold?: number
}

interface UseCarouselDragReturn {
  isDragging: boolean
  handlers: {
    onMouseDown: (e: React.MouseEvent) => void
    onMouseMove: (e: React.MouseEvent) => void
    onMouseUp: () => void
    onMouseLeave: () => void
    onTouchStart: (e: React.TouchEvent) => void
    onTouchMove: (e: React.TouchEvent) => void
    onTouchEnd: () => void
  }
}

export function useCarouselDrag({
  containerRef,
  onDragLeft,
  onDragRight,
  threshold = 50,
}: UseCarouselDragProps): UseCarouselDragReturn {
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef<number | null>(null)
  const currentX = useRef<number | null>(null)

  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true)
    startX.current = clientX
    currentX.current = clientX
  }, [])

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return
    currentX.current = clientX
  }, [isDragging])

  const handleDragEnd = useCallback(() => {
    if (!isDragging || startX.current === null || currentX.current === null) {
      setIsDragging(false)
      return
    }

    const diff = currentX.current - startX.current

    // Determine if drag was significant enough
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        onDragRight()
      } else {
        onDragLeft()
      }
    }

    setIsDragging(false)
    startX.current = null
    currentX.current = null
  }, [isDragging, onDragLeft, onDragRight, threshold])

  const handlers = {
    onMouseDown: (e: React.MouseEvent) => handleDragStart(e.clientX),
    onMouseMove: (e: React.MouseEvent) => handleDragMove(e.clientX),
    onMouseUp: () => handleDragEnd(),
    onMouseLeave: () => isDragging && handleDragEnd(),
    onTouchStart: (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX),
    onTouchMove: (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX),
    onTouchEnd: () => handleDragEnd(),
  }

  return { isDragging, handlers }
}
