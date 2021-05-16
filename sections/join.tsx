import Link from "next/link"
import Image from "next/image"

export const Join = () => (
  <>
    <section>
      <div className="relative bg-black">
        <div className="absolute inset-0 aspect-w-4 aspect-h-3 lg:aspect-w-2 lg:aspect-h-1">
          <Image
            className="w-full object-cover"
            src={`/hero/zfpa-businesses.jpeg`}
            layout="fill"
            quality={90}
            priority
          />
          <div
            className="absolute inset-0 bg-gray-300"
            style={{ mixBlendMode: "multiply" }}
            aria-hidden="true"
          />
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-prose mx-auto text-base py-4 md:py-8 text-white">
            <div>
              <p>
                We come from the restaurant business. We live the struggle every
                day. Knowing that we want to do more but don't have the time (or
                often, budget) to get around every aspect of meeting best
                practices is a dilemma. 1% pledge will help you get started on
                this journey towards collective action where just a few dollars
                per sale can add up to make renewable farming possible.
              </p>
            </div>

            <div className="py-8">
              <h2 className="text-xl py-4">Why Join?</h2>

              <div className="sm:max-w-sm pb-4">
                <p className="pt-4">
                  <strong>The World Needs Restaurants!</strong>{" "}
                  <em>
                    (And restaurants need to be serving better, more traceable
                    and ethically sourced food.)
                  </em>
                </p>
                <p className="pt-2">
                  Besides restoring our planet, becoming a ZFPA member happens
                  to pose additional benefits too.
                </p>

                <ul className="list-disc pl-4 mt-4">
                  <li>
                    The 1% Pathway costs food and beverage establishments $0
                  </li>
                  <li>Differentiate your business as forward-thinking</li>
                  <li>Attract mindful and conscious consumers and employees</li>
                  <li>Create better food </li>
                  <li>Change the world, effortlessly</li>
                </ul>
              </div>

              <Link href="/membership">
                <h2 className="text-xl p-4 rounded cursor-pointer bg-dark-amber inline-block">
                  Enquire now
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full aspect-w-3 aspect-h-1 object-cover"
            src={`/hero/restaurant.jpeg`}
            layout="fill"
            quality={60}
            priority
          />
          <div
            className="absolute inset-0 bg-white"
            style={{ mixBlendMode: "soft-light" }}
            aria-hidden="true"
          />
        </div>
        <div className="relative p-8">
          <div className="max-w-prose mx-auto">
            <div className="pt-10 pb-8">
              <h1 className="relative text-xl font-extrabold tracking-tight sm:text-2xl lg:text-4xl uppercase smallcaps bg-dark inline-block text-white p-4">
                Restaurant Partners
              </h1>
              <h4 className="relative inline-block bg-dark text-white p-4">
                Here are the 20 pilot ZFPA partners launching the 1% pledge with
                us on June 1st, 2021.
              </h4>
            </div>

            <div className="py-4">
              <div>
                <a href="https://www.uma-nota.com/hong-kong">Uma Nota</a>
              </div>
              <div>
                <a href="https://www.bedurestaurant.com">BEDU</a>
              </div>
              <div>
                <a href="https://www.andohk.com)">Ando</a>
              </div>
              <div>
                <a href="https://www.mott32.com">Mott 32</a>
              </div>
              <div>
                <a href="https://www.limewood.hk)">Limewood</a>
              </div>
              <div>
                <a href="https://sip-song.com">Sip Song</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
