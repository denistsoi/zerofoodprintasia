import Image from "next/image"
import { Layout } from "@components/Layout"
import { Hero } from "@components/Hero"

const people = [
  {
    name: "Chef Peggy Chan",
    role: "Executive Director",
    imageUrl: "/profile/peggy.jpeg",
    bio: "Since the inception of Grassroots Pantry in 2012, Peggy established her restaurant as a training ground for young F&B professionals ready and willing to challenge conventional foodservice operations. The award-winning plant-based restaurant was recognised by the UNSDG ESCAP in 2019 as a best practice case study and achieved the HK Awards for Environmental Excellence in the Service Industry. An authority on food sustainability in Asia, Peggy developed Grassroots Initiatives Consultancy in 2020 to assist food service professionals in their transition towards best practices that meets both human and planetary health goals. Peggy is an alumni of Global Shapers Hong Kong, World Economic Forum, and was nominated for the Basque Culinary World Prize in 2019.",
    linkedinUrl: "https://www.linkedin.com/in/peggy-chan-a15a1649/",
  },
  {
    name: "Joel Tomas",
    role: "Director of Partnerships",
    imageUrl: "/profile/joel.jpeg",
    bio: "A hospitality industry veteran with over 25 years experience in front of house operations. Joel joined Grassroots in the spring of 2018 as Operations Manager. His role included expanding the company’s operational development to meet more rigid sustainability practices, and extending those same practices to other F&B projects. He is currently completing a Bachelor in Health Science, majoring in Public Health & Global Sustainability from Western Sydney University.",
    linkedinUrl: "https://www.linkedin.com/in/joel-tomas-aaa90058/",
  },
]

export default function Team() {
  return (
    <>
      <Layout>
        <Hero slogan="About the Team" />

        {/* About the team */}
        <section>
          <div className="bg-white pt-12">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="max-w-prose mx-auto py-8">
                <div className="lg:col-span-2">
                  <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                    {people.map((person) => (
                      <li key={person.name} className="sm:py-8">
                        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                          <div className="aspect-w-1 aspect-h-1">
                            <div className="shadow-lg rounded-lg p-4 overflow-hidden flex md:p-0 sm:block">
                              <Image
                                layout="fill"
                                src={person.imageUrl}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <div className="space-y-4">
                              <div className="text-lg leading-6 font-medium space-y-1">
                                <h3>{person.name}</h3>
                                <p className="text-yellow-700">{person.role}</p>
                              </div>
                              <div className="text-md">
                                <p className="text-gray-500">{person.bio}</p>
                              </div>
                              <ul className="flex space-x-5">
                                <li>
                                  <a
                                    href={person.linkedinUrl}
                                    target="_blank"
                                    className="text-gray-400 hover:text-gray-500"
                                  >
                                    <span className="sr-only">LinkedIn</span>
                                    <svg
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
