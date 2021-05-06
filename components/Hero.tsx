import Image from "next/image"

interface HeroProps {
  slogan?: string
  filename?: string
}

export const Hero = ({
  slogan = "Restoring our climate, our food, and our health.",
  filename = "/hero/index.jpeg",
}: HeroProps) => {
  const clickHandler = () => {
    const currentLocation = window.scrollY
    const nextSection = document.querySelectorAll("section")[1]
    const nextSectionTop = nextSection.getBoundingClientRect().top

    window.scrollTo({
      top: nextSectionTop + currentLocation,
      behavior: "smooth",
    })
  }
  return (
    <section>
      <div className="relative bg-gray-400 ">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src={filename}
            alt=""
            layout="fill"
            priority
          />
          <div
            className="absolute inset-0 bg-gray-600"
            style={{ mixBlendMode: "multiply" }}
            aria-hidden="true"
          />
        </div>
        <div className="relative pt-24 pb-8 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 hero grid">
          <div className="max-w-prose mx-auto flex items-center">
            <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-4xl md:pl-8">
              {slogan}
            </h1>
          </div>
          <div className="max-w-prose mx-auto items-end justify-center text-white w-full inline-flex text-center">
            <div
              className="h-40 items-center flex cursor-pointer"
              onClick={clickHandler}
            >
              ___________
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
