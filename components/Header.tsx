import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Config } from "Config"
const { navigation } = Config

export const Header = () => {
  const [menuOpen, toggleMenu] = useState(false)

  return (
    <header className="relative bg-green md:block shadow-inner shadow">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between py-2 md:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">
              <div className="inline-flex h-20 sm:h-24 w-20 sm:w-24 items-center cursor-pointer border border-inner border-gray-50 rounded-full">
                <Image
                  className="h-20 w-auto sm:h-24"
                  width={120}
                  height={120}
                  quality={50}
                  src="/logo.png"
                  alt="zfpa"
                  layout="intrinsic"
                />
              </div>
            </Link>
          </div>
          <div className="flex md:flex items-center justify-end md:flex-1 lg:w-0">
            <nav className="hidden sm:flex flex-wrap ">
              {navigation.main.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="cursor-pointer whitespace-nowrap text-xs  font-medium text-white hover:text-gray-300 no-underline uppercase justify-right text-right py-2 px-4">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="text-white block sm:hidden">
              <button onClick={() => toggleMenu(!menuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          menuOpen ? "flex" : "opacity-0"
        } sm:hidden border-t-2 border-transparent border-opacity-10 border-gray-50 bg-green`}
      >
        <nav className="block bg-green sm:hidden flex-wrap flex w-full absolute">
          {navigation.main.map((item, index) => (
            <Link key={item.name} href={item.href}>
              <span
                className={`cursor-pointer whitespace-nowrap text-xs font-medium text-white hover:text-gray-300 no-underline uppercase w-full items-end text-right py-2 px-6 ${
                  index % 2 === 0 ? "" : "bg-opacity-20 bg-black"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
