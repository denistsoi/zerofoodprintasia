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

      <main className="pb-8">
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
                    Zero Foodprint Asia, an extension of{" "}
                    <Link href="https://www.zerofoodprint.org">
                      Zero Foodprint
                    </Link>{" "}
                    in California, is a nonprofit organization mobilizing the
                    food world around agricultural climate solutions. ZFPA hosts
                    a crowdfunding program that gathers funds from member food
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

        {/* Mission and Vision */}
        <section>
          <div className="mt-4 relative px-4 sm:px-6 lg:px-8 bg-green py-8 border-t-2 text-gray-100">
            <div className="max-w-prose mx-auto">
              <div className="pt-4">
                <h2 className="text-lg">
                  <span className="block text-base text-center text-white font-semibold tracking-wide uppercase">
                    Mission and Vision
                  </span>
                </h2>
              </div>

              <div className="text-base leading-8 mt-4">
                <p>
                  Our food system is broken and the food value chain has been
                  working in silos for the last 60 years. Restaurants want to do
                  better but are oppressed by societal and economic pressures of
                  staying afloat on nominal margins. The cycle of
                  take-make-waste has resulted in a handful of companies
                  controlling what we eat and how we eat.
                </p>
                <div className="mt-4">
                  <h3 className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                    Mission
                  </h3>
                  <ul className="list-disc pl-4">
                    <li>
                      To mobilise the restaurant industry around agricultural
                      climate solutions.{" "}
                    </li>
                    <li>
                      Help close the loop in our global food systems by
                      magnifying and tackling local issues.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Hong Kong has one of the highest densities of restaurants
                    per capita in the world, with 10% of the total workforce
                    working in the foodservice industry. The industry has a{" "}
                    <em>HUGE</em> responsibility to address environmental impact
                    of their operations - such as carbon emissions derived from
                    the decisions these businesses make. ZFPA provides an
                    opportunity for the hospitality industry to deliver
                    tangible, measurable actions towards solving the most
                    pressing crisis of our time - climate change.
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                    Vision
                  </h3>
                  <ul className="list-disc pl-4">
                    <li>
                      To use the power of grassroots movement in bringing food
                      sovereignty back to the working class, especially those
                      who grow and cook our food.
                    </li>
                    <li>To achieve a fair and equal food system for all.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-8">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-prose mx-auto">
              <div className="mt-8">
                <h2 className="text-lg">
                  <span className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                    Values
                  </span>
                </h2>
              </div>
              <div>
                <p className="text-gray-600 text-base leading-8 mt-4">
                  The ZFPA initiative will advance us towards fulfilling
                  short-term, long-term, local and global sustainability goals.
                </p>

                <p className="text-gray-600 text-base leading-8 mt-4">
                  Like our American counterpart, our parent organization, Zero
                  Foodprint, we share the same values - those of regeneration,
                  collective justice, and prosperity. We also take the{" "}
                  <Link href="https://sdgs.un.org/goals">
                    United Nation's Sustainable Development Goals
                  </Link>{" "}
                  into account. While ZFPA touches on all 17 UN Sustainable
                  Development Goals, the following make up our core.
                </p>
              </div>

              <div className="mt-4">
                <div className="grid grid-cols-3 gap-x-2">
                  <img
                    src="./sdg-12.jpeg"
                    alt="Responsible Consumption &#38; Production"
                  />
                  <img src="./sdg-13.jpeg" />
                  <img src="./sdg-17.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the team */}
        <section>
          {/* <div className="mt-4 relative px-4 sm:px-6 lg:px-8 border-t-2">
            <div className="max-w-prose mx-auto">
              <div className="mt-8">
                <h2 className="text-lg">
                  <span className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                    Team
                  </span>
                </h2>
              </div>
              <div className="mt-4">
                <h3>Chef Peggy Chan | Executive Director</h3>
                <p>
                  Since the inception of Grassroots Pantry in 2012, Peggy
                  established her restaurant as a training ground for young
                  F&#38;B professionals ready and willing to challenge
                  conventional foodservice operations. The award-winning
                  plant-based restaurant was recognised by the UNSDG ESCAP in
                  2019 as a best practice case study and achieved the HK Awards
                  for Environmental Excellence in the Service Industry. An
                  authority on food sustainability in Asia, Peggy developed
                  Grassroots Initiatives Consultancy in 2020 to assist food
                  service professionals in their transition towards best
                  practices that meets both human and planetary health goals.
                  Peggy is an alumni of Global Shapers Hong Kong, World Economic
                  Forum, and was nominated for the Basque Culinary World Prize
                  in 2019.
                </p>
              </div>
              <div>
                <h3>Joel Tomas | Director of Partnerships</h3>
                <p>
                  A hospitality industry veteran with over 25 years experience
                  in front of house operations. Joel joined Grassroots in the
                  spring of 2018 as Operations Manager. His role included
                  expanding the company’s operational development to meet more
                  rigid sustainability practices, and extending those same
                  practices to other F&#38;B projects. He is currently
                  completing a Bachelor in Health Science, majoring in Public
                  Health &#38; Global Sustainability from Western Sydney
                  University.
                </p>
              </div>
            </div>
          </div> */}
        </section>

        {/* ZFPA Businesses */}
        <section>
          {/* <div className="mt-4 relative px-4 sm:px-6 lg:px-8 border-t-2">
            <div className="max-w-prose mx-auto">
              <div className="mt-8">
                <h2 className="text-lg">
                  <span className="block text-base text-center text-green font-semibold tracking-wide uppercase">
                    Businesses
                  </span>
                </h2>
              </div>
            </div>
          </div> */}
        </section>
      </main>
      <Footer />
    </div>
  )
}
