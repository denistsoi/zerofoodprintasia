import { Layout } from "@components/Layout"
import { Hero } from "@components/Hero"

export default function Why() {
  return (
    <Layout>
      <Hero slogan="Why Asia?" filename="mini-bus-hong-kong" />

      <section>
        <div className="relative py-8 md:py-16 bg-gray-50 overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-prose mx-auto">
              <div className="text-base leading-8">
                <p className="pt-4">
                  Asia’s population is expected to hit 5 billion by 2035, with
                  the continent currently comprising around 60% of the world’s
                  population. If the world and its leaders are serious about
                  wanting to reduce carbon emissions, Asia should be the place
                  to start.
                </p>
                <p className="pt-4">
                  Food systems account for more than one third of global
                  greenhouse gas emissions and is often overlooked as a primary
                  contributor to overall carbon emissions. Restaurants, bars and
                  cafes are often the lifeblood of cities globally which filters
                  down to the local hawker markets that play a pivotal role in
                  Asian cities.
                </p>
                <p className="pt-4">
                  While China has recently set out its net zero emission target
                  for 2060 and Hong Kong by 2050, the potential for the ZFP
                  model to apply in cities across the continent is enormous. Why
                  Hong Kong to start? Because the city boasts the highest number
                  of restaurants per capita in the world and is a consumer
                  market that relies heavily on the convenience of takeaway and
                  dining out. We can catalyse this existing consumption culture
                  to fund solutions to immediately help combat climate change.
                </p>
                <p className="pt-4">
                  While China has recently set out its net zero emission target
                  for 2060 and Hong Kong by 2050, the potential for the ZFP
                  model to apply in cities across the continent is enormous. Why
                  Hong Kong to start? Because the city boasts the highest number
                  of restaurants per capita in the world and is a consumer
                  market that relies heavily on the convenience of takeaway and
                  dining out. We can catalyse this existing consumption culture
                  to fund solutions to immediately help combat climate change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
