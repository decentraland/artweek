import { useEffect, useState } from "react"

interface UseResizePageProps {
  size?: number
}

const useResizePage = ({ size = 568 }: UseResizePageProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobileWidth = window.innerWidth < size
      setIsMobile(mobileWidth)
      if (!mobileWidth) {
        setMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [size])

  return { isMobile, menuOpen, setMenuOpen, setIsMobile }
}

export { useResizePage }
