import { Header } from "@components/Header"
import { Footer } from "@components/Footer"

import { Meta } from "@components/Meta"
import { ReactNode } from "react"

interface Props {
  headerType?: string
  children: React.ReactChildren | ReactNode
}

export const Layout = ({ headerType, children }: Props) => (
  <>
    <Meta />

    <Header headerType={headerType} />

    <main>{children}</main>

    <Footer />
  </>
)
