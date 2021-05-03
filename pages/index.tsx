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
      </main>
      <Footer />
    </div>
  )
}
