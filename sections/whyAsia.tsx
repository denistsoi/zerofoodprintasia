import Image from "next/image"
export const WhyAsia = () => (
  <section>
    <div className="relative py-8 md:py-16 overflow-hidden">
      <div className="absolute inset-0 aspect-w-5 aspect-h-1">
        <Image
          className="hidden md:block w-full object-contain lg:object-cover"
          src={`/hero/charsiu.jpg`}
          layout="fill"
          quality={90}
          priority
        />
        <div
          className="absolute inset-0 bg-dark-pink "
          style={{ mixBlendMode: "multiply" }}
          aria-hidden="true"
        />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 text-white xl:max-w-6xl xl:mx-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-5">
          <div className="text-base col-span-1 p-4 md:bg-gray-700 md:bg-opacity-70">
            <p className="text-sm pt-0">
              Asia’s population is expected to hit 5 billion by 2035, with the
              continent currently comprising around 60% of the world’s
              population. If the world and its leaders are serious about wanting
              to reduce carbon emissions, Asia should be the place to start.
            </p>
            <p className="text-sm">
              Food systems account for more than one third of global greenhouse
              gas emissions and is often overlooked as a primary contributor to
              overall carbon emissions. Restaurants, bars and cafes are often
              the lifeblood of cities globally which filters down to the local
              hawker markets that play a pivotal role in Asian cities.
            </p>
          </div>
          <div className="md:col-auto lg:col-span-3 py-28 md:py-0"></div>
          <div className="text-base col-span-1 p-4 md:bg-gray-700 md:bg-opacity-70">
            <p className="text-sm pt-0">
              While China has recently set out its net zero emission target for
              2060 and Hong Kong by 2050, the potential for the ZFP model to
              apply in cities across the continent is enormous. Why Hong Kong to
              start? Because the city boasts the highest number of restaurants
              per capita in the world and is a consumer market that relies
              heavily on the convenience of takeaway and dining out. We can
              catalyse this existing consumption culture to fund solutions to
              immediately help combat climate change.
            </p>
            <p className="text-sm">
              ZFPA aims to create a “new normal” by mobilising restaurants to
              directly support improvements in the food system with just a few
              dollars per diner - to help reverse climate change while creating
              delicious, nutritious food for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
