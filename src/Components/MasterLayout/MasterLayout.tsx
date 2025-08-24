
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { video } from "../../assets/images";
import { useEffect, useState } from "react"
import Loader from "../Loader/Loader";


const MasterLayout = () => {
   const [loading, setLoading] = useState(true);
   
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading){
     return <Loader loading={loading}/>
  }
  return (
    <>

      {/* Skip link for accessibility */}
      <a href="#main-content" className="sr-only focusable skip-link">
        Skip to main content
      </a>

      <div className="bg-[var(--primary-color)] min-h-screen font-[Poppins, sans-serif] content">
          
        {/* Visually-hidden helpers for accessibility text */}
        <header aria-label="Site header" role="banner">
          <NavBar />
        </header>

        {/* Decorative/background video with accessible controls && responsive container */}
        <section
          className="video-hero relative w-full overflow-hidden"
          aria-label="Background video section"
        >
          <div className="video-background w-full h-full absolute inset-0 -z-10">
            {/* Use a poster or fallback image for initial render to improve CLS */}
            <video
              aria-label="Background video"
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              poster="/path/to/poster.jpg" // provide a real poster path
              className="w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Main content area */}
        <main id="main-content" role="main" className="content-area">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MasterLayout;