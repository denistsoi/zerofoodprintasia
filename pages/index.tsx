import Head from "next/head"
import Link from "next/link"

import { Config } from "Config"

import { Header } from "@components/Header"
import { Footer } from "@components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* header */}
      <Header />

      <main className="py-4">
        {/* hero section */}
        <section>
          <div className="relative bg-gray-400">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover"
                src="./hero.jpeg"
                alt=""
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
                  Restoring our climate, our food, and our health.
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* why */}
        <section>
          <div className="relative py-8 bg-white overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="max-w-prose mx-auto">
                <h2 className="text-lg">
                  <span className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                    What is Zero Foodprint Asia (ZFPA)?
                  </span>
                </h2>
                <div>
                  <p className="mt-6 text-base text-justify text-gray-600 leading-8">
                    Zero Foodprint Asia, an extension of Zero Foodprint in
                    California, is a nonprofit organization mobilizing the food
                    world around agricultural climate solutions. ZFPA hosts a
                    crowdfunding program that gathers funds from member food
                    businesses such as restaurants, cafes, bars and food
                    retailers. Every member pledges 1% of their revenue to ZFPA
                    to fund regenerative farming practices that draw down carbon
                    from the atmosphere and help combat global warming; this is
                    the ZFP model.
                  </p>
                  <p className="mt-6 text-base text-justify text-gray-600 leading-8">
                    Our aim is to engage the hospitality sector in climate
                    solutions and create a culture where it is normal for food
                    businesses and customers to directly bring about
                    improvements in the food system. Food businesses participate
                    by becoming a ZFPA member and customers contribute by
                    spending at member food businesses. With just a few dollars
                    per customer, we help restore the climate one meal at a
                    time.
                  </p>
                </div>
                <div className="mt-8">
                  <h3>
                    <span className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                      Why do we need ZFPA?
                    </span>
                  </h3>
                  <p className="mt-6 text-base text-justify text-gray-600 leading-8">
                    According to{" "}
                    <Link href="https://drawdown.org/">Project Drawdown</Link>,
                    the food system accounts for over 30% of all emissions and
                    is often overlooked as a primary contributor to overall
                    carbon emissions. Asia, currently home to 60% of the world’s
                    population, is projected to hit the 5 billion mark by 2035.
                    In the next 30 years, the population is expected to grow by
                    over 600 million, and the demand for food will rise
                    alongside. To meet new food demands, the food system must
                    also grow and will release ever more carbon emissions as a
                    result. If the world and its leaders are serious about
                    reducing carbon emissions, Asia is the place to start.
                  </p>
                </div>

                <div className="mt-8">
                  <h3>
                    <span className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                      Where will ZFPA first plant its roots?
                    </span>
                  </h3>
                  <p className="mt-6 text-base text-justify text-gray-600 leading-8">
                    ZFPA will start with Hong Kong! The city boasts the highest
                    number of restaurants per capita in the world and is a
                    consumer market that relies heavily on the convenience of
                    takeaway and dining out. By implementing the ZFP model in
                    Hong Kong, we can catalyse the city’s existing consumption
                    culture to fund solutions that immediately help combat
                    climate change. With China’s recently announced net zero
                    emission target for 2060 and Hong Kong’s by 2050, ZFPA will
                    undoubtedly be a great complementary force.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
            <div className="max-w-prose mx-auto">
              <h2 className="text-lg">
                <span className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                  Two Pathways
                </span>
              </h2>

              <div className="text-gray-600 text-base">
                <h4 className="mt-2 text-md text-bold py-2 border-b-2 mb-2">
                  1% Pledge
                </h4>
                <ul className="list-disc pl-4">
                  <li>
                    Restaurants / F&#38;B retailers (members) add a 1% surcharge
                    on customer's bills or increase their selling prices.
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

        {/* Mission and Vision */}
        <section></section>

        {/* Value */}
        <section></section>

        {/* About the team */}
        <section></section>

        {/* ZFPA Businesses */}
        <section></section>
      </main>
      <Footer />
    </div>
  )
}
