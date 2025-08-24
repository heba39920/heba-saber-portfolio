import { ClimbingBoxLoader } from "react-spinners"
import { useEffect, useState } from "react"

const Loader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // If the app is already loaded (e.g., SSR or preloaded), you might set false immediately
    const onLoad = () => setLoading(false)

    // If the window has already completed loading, skip the listener
    if (document.readyState === "complete") {
      setLoading(false)
      return
    }

    window.addEventListener("load", onLoad)

    return () => {
      window.removeEventListener("load", onLoad)
    }
  }, [])

  // You can conditionally render the loader or return null if not loading
  if (!loading) {
    return null
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[var(--primary-color)]">
      <ClimbingBoxLoader loading={loading} color="var(--light-color)" />
    </div>
  )
}

export default Loader;