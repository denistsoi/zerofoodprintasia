import Head from "next/head"
import Link from "next/link"

import { Config } from "Config"

const Header = () => (
  <header className="relative bg-green">
    <>
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 md:justify-center md:space-x-10">
          <div className="flex justify-center lg:w-0 lg:flex-1">
            <a href="#" className="inline-flex items-center">
              <img
                className="h-16 w-auto sm:h-18"
                src="./logo.png"
                alt="zfpa"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  </header>
)

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

      <main>
        {/* header */}
        <Header />

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
                    What is Zero Foodprint Asia and why do we need it?
                  </span>
                </h2>
                <div>
                  <p className="mt-4 text-sm text-justify text-gray-600 leading-2">
                    Asia’s population is projected to hit the 5 billion mark by
                    2035 and the continent currently comprises approximately 60%
                    of the world’s population. Over the next 30 years, the
                    population here is expected to grow by over 600 million. If
                    the world and its leaders are serious about wanting to
                    reduce carbon emissions, Asia should be the place to start.
                  </p>
                  <p className="mt-4 text-sm text-justify text-gray-600 leading-2">
                    According to{" "}
                    <Link href="https://drawdown.org/">Project Drawdown</Link>,
                    the food system accounts for over 30% of all emissions and
                    is often overlooked as a primary contributor to overall
                    carbon emissions. Restaurants, bars and cafes are often the
                    lifeblood of cities globally which filters down to the local
                    hawker markets that play a pivotal role in Asian cities.
                  </p>
                  <p className="mt-4 text-sm text-justify text-gray-600 leading-2">
                    We can catalyse the city’s existing consumption culture to
                    fund solutions to immediately help combat climate
                    change. The basis of Zero Foodprint is to engage the
                    hospitality sector on the importance of reducing carbon
                    emissions. We aim to create a new culture where it is normal
                    for a restaurant to directly support improvement in the food
                    system and customers could in turn choose those restaurants.
                  </p>
                  <p className="mt-4 text-sm text-justify text-gray-600 leading-2">
                    This campaign is for cafes, food retailers and restaurants
                    to pledge 1% of their revenues, which will then be
                    distributed to fund regenerative agricultural practises
                    (that draw down carbon from the atmosphere) across HK and
                    other parts of Asia. By mobilizing restaurants to support
                    sustainable farming and ranching projects in their regions,
                    we can reverse climate change and create delicious and
                    nutritious food with just a few cents from each diner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* who */}
        {/* <section>
          <div className="relative py-8 bg-green text-white overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="max-w-prose mx-auto">
                <h1 className="text-xl">
                  <span className="block text-center text-base text-white font-semibold tracking-wide uppercase">
                    About Us
                  </span>
                </h1>

                <div className="mt-2">
                  <h2 className="text-sm">
                    <span className="block text-center text-white font-semibold tracking-wide uppercase">
                      What We Do
                    </span>
                  </h2>
                </div>

                <div className="mt-2 md:mt-4">
                  <p className="mt-4 text-sm text-justify text-white leading-2">
                    Zero Foodprint Asia is an extension of{" "}
                    <Link href="https://www.zerofoodprint.org/home-1">
                      <span className="text-white underline">
                        Zero Foodprint
                      </span>
                    </Link>{" "}
                    in California. Peggy Chan & Joel Tomas aim to expand the
                    table-to-farm movement by launching in Hong Kong.
                  </p>
                </div>

                <div className="mt-2 md:mt-4">
                  <p className="">Here’s the deal: </p>
                </div>

                <div className="mt-2 md:mt-4">
                  <strong>
                    <em>
                      Industrial agriculture is subsidized; regenerative
                      agriculture is not.
                    </em>
                  </strong>{" "}
                </div>
                <div className="mt-2 md:mt-4">
                  <p>
                    To even things out, ZFPA members collect a few dollars per
                    meal which adds up to make renewable farming possible. Think
                    of it as crowd-funded grants to farmers for the
                    carbon-storing benefits of growing better food.
                  </p>
                </div>

                <div className="mt-2 md:mt-4">
                  <blockquote>
                    A simple way to be part of the solution
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section>
          ### Two Pathways **1% Pledge** - Restaurants / F&B retailers (members)
          add a 1% surcharge on customer's bills or increase their selling
          prices. - Members contribute the addtional 1% to ZFPA's funds. - The
          funds will be granted to local farms (assessed and verified by the
          ZFPA team) to aid them in transitioning to regenerative agricultural
          practices/carbon farming. - Local scientists and conservation experts
          will oversee and manage implementation. **Carbon Neutrality Program /
          Lifecycle Assessment (LCA) (Q2 2022)** - Members will examine the
          environmental impact of their operations, including products from raw
          material to used item. - Receive in-depth reporting with
          recommendations and actionable insights for reducing emissions -
          Membership dues will be calculated in relation to businesses
          operational emissions - Dues will be pledged to ZFPA's funds Both
          pathways contribute to large-scale reform by creating acres of healthy
          soil and removing tonnes of carbon from the atmosphere. The Carbon
          Neutrality/LCA Program additonally equips food businesses with the
          tools to become increasingly aware of their environmental impact and
          create sustainable change for future operations. 80-90% of the funds
          members raise go towards our local and regional projects.
        </section> */}

        {/* <section className="bg-blue-400 py-8 px-4">
          ## Mission and Vision Our food system is broken and the food value
          chain has been working in silos for the last 60 years. Restaurants
          want to do better but are oppressed by societal and economic pressures
          of staying afloat on nominal margins. The cycle of take-make-waste has
          resulted in a handful of companies controlling what we eat and how we
          eat. ### Mission - To mobilise the restaurant industry around
          agricultural climate solutions. - Help close the loop in our global
          food systems by magnifying and tackling local issues. Hong Kong has
          one of the highest densities of restaurants per capita in the world,
          with 10% of the total workforce working in the foodservice industry.
          The industry has a HUGE responsibility to address environmental impact
          of their operations - such as carbon emissions derived from the
          decisions these businesses make. ZFPA provides an opportunity for the
          hospitality industry to deliver tangible, measurable actions towards
          solving the most pressing crisis of our time - climate change. ###
          Vision - To use the power of grassroots movement in bringing food
          sovereignty back to the working class, especially those who grow and
          cook our food. - To achieve a fair and equal food system for all.
        </section> */}

        {/* <section>
          ## Values The ZFPA initiative will advance us towards fulfilling
          short-term, long-term, local and global sustainability goals. Like our
          American counterpart, our parent organization, Zero Foodprint, we
          share the same values - those of regeneration, collective justice, and
          prosperity. We also take the [United Nation's Sustainable Development
          Goals](https://sdgs.un.org/goals) into account. While ZFPA touches on
          all 17 UN Sustainable Development Goals, the following make up our
          core. SDG 12 - Responsible Consumption & Production - "Ensure
          sustainable and consumption and production patterns." SDG 13 - Climate
          Action - "Take urgent action to combat climate change and its impacts"
          SDG 17 - Partnership for the Goals - "Strengthen the implementation
          and revitalize the global partnership for sustainable development."
        </section> */}

        {/* <section>
          ## Team ### ZFPA **Chef Peggy Chan | Executive Director** Since the
          inception of Grassroots Pantry in 2012, Peggy established her
          restaurant as a training ground for young F&B professionals ready and
          willing to challenge conventional foodservice operations. The
          award-winning plant-based restaurant was recognised by the UNSDG ESCAP
          in 2019 as a best practice case study and achieved the HK Awards for
          Environmental Excellence in the Service Industry. An authority on food
          sustainability in Asia, Peggy developed Grassroots Initiatives
          Consultancy in 2020 to assist food service professionals in their
          transition towards best practices that meets both human and planetary
          health goals. Peggy is an alumni of Global Shapers Hong Kong, World
          Economic Forum, and was nominated for the Basque Culinary World Prize
          in 2019. **Joel Tomas | Director of Partnerships** A hospitality
          industry veteran with over 25 years experience in front of house
          operations. Joel joined Grassroots in the spring of 2018 as Operations
          Manager. His role included expanding the company’s operational
          development to meet more rigid sustainability practices, and extending
          those same practices to other F&B projects. He is currently completing
          a Bachelor in Health Science, majoring in Public Health & Global
          Sustainability from Western Sydney University.
        </section> */}

        {/* ZFPA business */}
        {/* <section>
          <div className="bg-gray-900">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <div className="p-4 border-2 border-white rounded-full ">
                    <div className="h-12 w-12 p-4 flex align-center">
                      <img
                        className="h-full"
                        src="https://www.grassrootspantry.com/wp-content/uploads/2015/09/logo_white-v2r.png"
                        alt="Tuple"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}
