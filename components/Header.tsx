import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Config } from "Config"
const { navigation } = Config

export const Header = ({ headerType }) => {
  const [menuOpen, toggleMenu] = useState(false)

  return (
    <header
      className={`${
        headerType ?? "absolute bg-green md:bg-transparent"
      } top-0 inset-x-0 md:block z-10`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 border-b border-gray-900 md:border-transparent">
        <div className="flex justify-between py-2 md:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">
              <div className="inline-flex h-24 sm:h-28 w-24 sm:w-28 items-center cursor-pointer">
                <Image
                  className="h-24 w-auto sm:h-28"
                  width={120}
                  height={120}
                  quality={50}
                  src="/logo-white.png"
                  alt="zfpa"
                  layout="intrinsic"
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <nav className="hidden md:flex flex-wrap ">
              {navigation.main.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="cursor-pointer whitespace-nowrap text-xs  font-medium text-white hover:text-gray-300 no-underline uppercase justify-right text-right py-2 px-4">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="text-white md:hidden">
              <button onClick={() => toggleMenu(!menuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${menuOpen ? "opacity-100" : "hidden"} md:hidden relative`}
      >
        <nav className="block bg-green w-full absolute h-full top-0 inset-x-0">
          {navigation.main.map((item, index) => (
            <Link key={item.name} href={item.href}>
              <div className="bg-green items-end text-right flex flex-1 w-full">
                <span
                  className={`cursor-pointer whitespace-nowrap text-xs font-medium text-white hover:text-gray-300 no-underline uppercase w-full text-right py-2 h-8 px-6 ${
                    index % 2 === 0 ? "" : "bg-opacity-20 bg-black"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
