import Image from "next/image"

interface HeroProps {
  slogan?: string
  image?: string
}

export const Hero = ({
  slogan = "Restoring our climate, our food, and our health.",
  image = "/hero/index.jpeg",
}: HeroProps) => (
  <section>
    <div className="relative bg-gray-400 hero">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src="/hero/index.jpeg"
          alt=""
          layout="fill"
          priority
        />
        <div
          className="absolute inset-0 bg-gray-400"
          style={{ mixBlendMode: "multiply" }}
          aria-hidden="true"
        />
      </div>
      <div className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-prose mx-auto">
          <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-4xl">
            {slogan}
          </h1>
        </div>
      </div>
    </div>
  </section>
)
