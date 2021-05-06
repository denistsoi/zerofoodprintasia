import { Layout } from "@components/Layout"
import { Hero } from "@components/Hero"

export default function Why() {
  return (
    <Layout>
      <Hero slogan="How do we do this?" filename="meal" />
      <section>
        <div className="relative px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-prose mx-auto">
            <div className="text-base leading-8">
              <p className="py-4 leading-8 text-base">
                Here’s the deal. Industrial agriculture is subsidized;
                regenerative agriculture is not. To even things out, ZFPA
                members collect a few dollars per meal which adds up to make
                renewable farming possible. Think of it as crowd-funded grants
                to farmers for the carbon-storing benefits of growing better
                food.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-green">
          <div className="max-w-prose mx-auto">
            <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-4xl md:border-l-4 md:pl-8">
              A simple way to be part of the solution
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="relative px-4 sm:px-6 lg:px-8 pt-8">
          <div className="max-w-prose mx-auto">
            <div className="pb-8">
              <h2 className="text-xl font-extrabold tracking-tight sm:text-4xl lg:text-2xl">
                Two Pathways
              </h2>
            </div>

            <div className="grid grid-cols-3 pb-8 gap-0 md:gap-2">
              <div className="col-span-3 md:col-span-1">
                <h3 className="py-2 text-base">1% Pledge</h3>
              </div>
              <div className="col-span-3 md:col-span-2 px-4">
                <ul className="list-disc pl-4">
                  <li className="text-base leading-2 py-2">
                    Restaurants / F&B retailers (members) add a 1% surcharge on
                    customer's bills or increase their selling prices.{" "}
                  </li>
                  <li className="text-base leading-2 py-2">
                    Members contribute the addtional 1% to ZFPA's funds.{" "}
                  </li>
                  <li className="text-base leading-2 py-2">
                    The funds will be granted to local farms (assessed and
                    verified by the ZFPA team) to aid them in transitioning to
                    regenerative agricultural practices/carbon farming.
                  </li>
                  <li className="text-base leading-2 py-2">
                    Local scientists and conservation experts will oversee and
                    manage implementation.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-3 pb-8 gap-0 md:gap-2">
              <div className="col-span-3 md:col-span-1">
                <h3 className="py-2 text-base">
                  Carbon Neutrality Program / Lifecycle Assessment (Q2 2022)
                </h3>
              </div>
              <div className="col-span-3 md:col-span-2 px-4">
                <ul className="list-disc pl-4">
                  <li className="text-base leading-2 py-2">
                    Members will examine the environmental impact of their
                    operations, including products from raw material to used
                    item.
                  </li>
                  <li className="text-base leading-2 py-2">
                    Receive in-depth reporting with recommendations and
                    actionable insights for reducing emissions.
                  </li>
                  <li className="text-base leading-2 py-2">
                    Membership dues will be calculated in relation to businesses
                    operational emissions.
                  </li>
                  <li className="text-base leading-2 py-2">
                    Dues will be pledged to ZFPA's funds.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-prose mx-auto">
            <p className="text-base leading-8">
              Both pathways contribute to large-scale reform by creating acres
              of healthy soil and removing tonnes of carbon from the atmosphere.
              The Carbon Neutrality/LCA Program additionally equips food
              businesses with the tools to become increasingly aware of their
              environmental impact and create sustainable change for future
              operations.
            </p>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="pb-16 pt-8">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-prose mx-auto">
            <div>
              <h3 className="text-xl">Values</h3>
              <p className="text-base leading-8">
                While ZFPA touches on all 17 UN Sustainable Development Goals,
                the following make up our core.
              </p>
            </div>

            <div className="mt-4">
              <div className="grid grid-cols-3 gap-x-2">
                <img
                  src="./sdg-12.jpeg"
                  alt="Responsible Consumption &#38; Production"
                />
                <img src="./sdg-13.jpeg" alt="Climate Action" />
                <img src="./sdg-17.jpeg" alt="Partnership for the Goals" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
