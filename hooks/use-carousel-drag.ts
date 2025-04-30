import { useState, useCallback, RefObject, MutableRefObject } from "react"

interface UseCarouselDragProps {
  containerRef: RefObject<HTMLDivElement> | MutableRefObject<HTMLDivElement | null>
  onDragLeft: () => void
  onDragRight: () => void
  threshold?: number
}

export function useCarouselDrag({
  containerRef,
  onDragLeft,
  onDragRight,
  threshold = 100
}: UseCarouselDragProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true)
    setStartX(clientX - (containerRef.current?.offsetLeft || 0))
  }, [containerRef])

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return
    const x = clientX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (walk > threshold) {
      onDragLeft()
      setIsDragging(false)
    }
    if (walk < -threshold) {
      onDragRight()
      setIsDragging(false)
    }
  }, [isDragging, startX, threshold, containerRef, onDragLeft, onDragRight])

  const handleDragEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  return {
    isDragging,
    handlers: {
      onMouseDown: (e: React.MouseEvent) => handleDragStart(e.pageX),
      onMouseMove: (e: React.MouseEvent) => {
        e.preventDefault()
        handleDragMove(e.pageX)
      },
      onMouseUp: handleDragEnd,
      onMouseLeave: handleDragEnd,
      onTouchStart: (e: React.TouchEvent) => handleDragStart(e.touches[0].pageX),
      onTouchMove: (e: React.TouchEvent) => handleDragMove(e.touches[0].pageX),
      onTouchEnd: handleDragEnd
    }
  }
}
