import Link from "next/link"

import { Config } from "Config"
const { navigation } = Config

export const Header = () => (
  <header className="relative bg-green md:block shadow-inner shadow">
    <div className="max-w-8xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between py-2 md:space-x-10">
        <div className="flex lg:w-0 lg:flex-1">
          <Link href="/">
            <div className="inline-flex items-center cursor-pointer">
              <img
                className="h-20 w-auto sm:h-24"
                src="./logo.png"
                alt="zfpa"
              />
            </div>
          </Link>
        </div>
        <div className="flex md:flex items-center justify-end md:flex-1 lg:w-0">
          <nav className="flex flex-wrap">
            {navigation.main.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="cursor-pointer whitespace-nowrap text-sm font-medium text-white hover:text-gray-300 no-underline uppercase justify-center-center flex items-center py-2 px-4">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  </header>
)
