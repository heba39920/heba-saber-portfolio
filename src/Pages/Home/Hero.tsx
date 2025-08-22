import { profileImg } from "../../assets/images"

const Hero = () => {
  return (
    <section aria-label="Hero" className="grid grid-cols-4 gap-20 items-center mt-10 ">
      {/* Text content */}
      <div className="order-2 lg:order-1  col-span-4 lg:col-span-3 text-center lg:text-start font-bold">
        <h1 className="text-shadow-lg text-shadow-teal-800 text-3xl md:text-5xl">
          THIS IS <span className="text-[var(--light-color)]">HEBA SABER.</span>
        </h1>
        <p className="text-xl md:text-3xl mt-6 text-shadow-lg text-shadow-teal-800 text-[var(--light-color)]">
          Frontend Web Developer
        </p>
      </div>

      {/* Profile image with accessible alt text and responsive styling */}
      <div className="relative order-1 lg:order-2 col-span-4 lg:col-span-1 mx-auto" aria-label="Profile image">
        <div className="absolute inset-0 border-2 border-white hidden md:block" aria-hidden="true" />
        <div className="md:-translate-x-10 md:translate-y-10 md:border-none border-8 border-[var(--primary-color)] rounded-4xl md:rounded-none overflow-hidden">
          <img
            src={profileImg}
            alt="Profile image of Heba Saber, FrontEnd Web Developer"
            className="bg-[var(--light-color)] w-full h-full object-cover rounded-4xl md:rounded-none"
            loading="eager"
          />
        </div>
      
      </div>
      
    </section>  
  )
}

export default Hero