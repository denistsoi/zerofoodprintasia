import { Layout } from "@components/Layout"
import { Hero } from "@components/Hero"

export default function About() {
  return (
    <>
      <Layout>
        <Hero filename="hands" slogan="ZFPA Businesses" />
        <section>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-prose mx-auto text-base py-4 md:py-8">
              <div>
                <p>
                  We come from the restaurant business. We live the struggle
                  every day. Knowing that we want to do more but don't have the
                  time (or often, budget) to get around every aspect of meeting
                  best practices is a dilemma. 1% pledge will help you get
                  started on this journey towards collective action where just a
                  few dollars per sale can add up to make renewable farming
                  possible.
                </p>
              </div>

              <div className="py-8">
                <h2 className="text-xl py-4">Why Join?</h2>
                <div>
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
                </div>
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
            </div>
          </div>
        </section>

        <section>
          <div className="relative px-4 sm:px-6 lg:px-8 border-t-2">
            <div className="max-w-prose mx-auto text-base py-4 md:py-8">
              <div className="grid grid-cols-3">
                <div className="col-span-1">
                  <h2 className="text-xl py-4">Enquire now</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
