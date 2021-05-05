import Link from "next/link"
import { Layout } from "@components/Layout"
import { Hero } from "@components/Hero"

export default function About() {
  return (
    <>
      <Layout>
        <Hero />

        {/* why */}
        <section className="border-t-2">
          <div className="relative py-8 bg-white overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="max-w-prose mx-auto">
                <h2 className="text-lg">
                  <span className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                    About us
                  </span>
                </h2>
                <div>
                  <p className="mt-6 text-base text-justify text-gray-600 leading-8">
                    <strong className="bold">Here’s the deal: </strong>
                    <em>
                      Industrial agriculture is subsidized; regenerative
                      agriculture is not.
                    </em>{" "}
                    To even things out, ZFPA members collect a few dollars per
                    meal which adds up to make renewable farming possible. Think
                    of it as crowd-funded grants to farmers for the
                    carbon-storing benefits of growing better food.
                  </p>

                  <h3 className="border-l-2 pl-4 mt-6 text-lg bold">
                    A simple way to be part of the solution
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Two Pathways */}
          <div className="mt-4 relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-prose mx-auto leading-8">
              <h2 className="text-lg">
                <span className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                  Two Pathways
                </span>
              </h2>

              <div>
                <img className="w-full" src="./pathway.png" />
              </div>

              <div className="text-gray-600 text-base leading-8">
                <h4 className="mt-2 text-md text-bold py-2 border-b-2 mb-2">
                  1% Pledge
                </h4>
                <ul className="list-disc pl-4">
                  <li>
                    <p>
                      Restaurants / F&#38;B retailers (members) add a 1%
                      surcharge on customer's bills or increase their selling
                      prices.
                    </p>
                  </li>
                  <li>Members contribute the addtional 1% to ZFPA's funds.</li>
                  <li>
                    The funds will be granted to local farms (assessed and
                    verified by the ZFPA team) to aid them in transitioning to
                    regenerative agricultural practices/carbon farming.{" "}
                  </li>
                  <li>
                    Local scientists and conservation experts will oversee and
                    manage implementation.
                  </li>
                </ul>

                <h4 className="mt-2 text-md text-bold py-2 border-b-2 mb-2">
                  Carbon Neutrality Program / Lifecycle Assessment (LCA) (Q2
                  2022)
                </h4>
                <ul className="list-disc pl-4">
                  <li>
                    Members will examine the environmental impact of their
                    operations, including products from raw material to used
                    item.
                  </li>
                  <li>
                    Receive in-depth reporting with recommendations and
                    actionable insights for reducing emissions
                  </li>
                  <li>
                    Membership dues will be calculated in relation to businesses
                    operational emissions
                  </li>
                  <li>Dues will be pledged to ZFPA's funds</li>
                </ul>

                <p className="mt-4 text-base leading-8">
                  Both pathways contribute to large-scale reform by creating
                  acres of healthy soil and removing tonnes of carbon from the
                  atmosphere. The Carbon Neutrality / LCA Program additonally
                  equips food businesses with the tools to become increasingly
                  aware of their environmental impact and create sustainable
                  change for future operations. 80-90% of the funds members
                  raise go towards our local and regional projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
