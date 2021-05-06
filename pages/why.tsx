import { Layout } from "@components/Layout"
import { Hero } from "@components/Hero"

export default function Why() {
  return (
    <Layout>
      <Hero slogan="Why Asia?" filename="/hero/mini-bus-hong-kong.jpeg" />

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
                  According to{" "}
                  <a
                    href="http://www.fao.org/news/story/en/item/1379373/icode/"
                    target="_blank"
                  >
                    United Nations Food & Agriculture Organizations
                  </a>
                  , food systems account for more than one third of global
                  greenhouse gas emissions and is often overlooked as a primary
                  contributor to overall carbon emissions. Restaurants, bars and
                  cafes are often the lifeblood of cities globally which filters
                  down to the local hawker markets that play a pivotal role in
                  Asian cities.
                </p>
                <p className="pt-4">
                  While China has recently set out its net zero emission target
                  for 2060 and Hong Kong by 2050, the potential for the Zero
                  Foodprint model to apply in cities across the continent is
                  enormous.{" "}
                  <strong className="extra-bold">
                    Why Hong Kong to start?
                  </strong>{" "}
                  Because the city boasts the highest number of restaurants per
                  capita in the world and is a consumer market that relies
                  heavily on the convenience of takeaway and dining out. We can
                  catalyse the city’s existing consumption culture to fund
                  solutions to immediately help combat climate change.
                </p>
                <p className="pt-4">
                  Zero Foodprint Asia's role is to{" "}
                  <strong>
                    engage and set forth tangible action and measurable
                    sustainability targets in the hospitality sector.
                  </strong>{" "}
                  We aim to create a new culture where it is normal for a
                  restaurant to directly support improvement in the food system
                  and customers could in turn choose those restaurants.
                </p>
                <p className="pt-4">
                  By mobilizing restaurants to support sustainable farming and
                  ranching projects in their regions, we can help reverse
                  climate change and create delicious and nutritious food with
                  just a few dollars per diner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
