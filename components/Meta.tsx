import Head from "next/head"
import { Config } from "Config"

export const Meta = () => (
  <Head>
    <title>{Config.title}</title>

    <link rel="icon" href="/favicon.ico" />
    <link
      rel="preload"
      href="/fonts/Kollektif/Kollektif.ttf"
      as="font"
      crossOrigin=""
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
  </Head>
)
