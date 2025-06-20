import { useEffect, useState } from 'react'

export default function ParallaxBackground({ imageUrl }) {
  const [isIOS, setIsIOS] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (isIOS) {
    return null
  }

  return (
    <div
      className="h-[200px] md:h-[300px] overflow-hidden -mt-1"
      style={{
        backgroundColor: "#000",
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize: "cover",
      }}
    />
  )
}