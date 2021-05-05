import { Header } from "@components/Header"
import { Footer } from "@components/Footer"

import { Meta } from "@components/Meta"

export const Layout = ({ children }) => (
  <>
    <Meta />

    <Header />

    <main>{children}</main>

    <Footer />
  </>
)
