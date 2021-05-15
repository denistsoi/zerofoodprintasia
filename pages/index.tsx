import Link from "next/link"
import { Layout } from "@components/Layout"
import { Hero } from "@components/Hero"

import { What } from "@sections/what"
import { WhyAsia } from "@sections/whyAsia"
import { How } from "@sections/how"
import { Join } from "@sections/join"
import { Values } from "@sections/values"

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />

        {/* why */}
        <What />
        <WhyAsia />
        <How />
        <Join />
        <Values />
      </Layout>
    </>
  )
}
