import Link from "next/link"
import { Config } from "Config"
import { Acknowledgement } from "./Acknowledgement"
const { navigation } = Config

export const Footer = () => (
  <footer className="bg-dark-green">
    <div className="max-w-7xl mx-auto pt-6 pb-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav
        className="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        {navigation.main.map((item) => (
          <div key={item.name} className="px-2 md:py-5 py-2">
            <Link key={item.name} href={item.href}>
              <span className="cursor-pointer whitespace-nowrap text-sm font-medium text-white hover:text-gray-300 no-underline uppercase justify-center-center flex items-center py-2 px-4">
                {item.name}
              </span>
            </Link>
          </div>
        ))}
      </nav>
      <div className="py-2 sm:py-4 flex justify-center space-x-2 md:space-x-6">
        {navigation.social.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-white hover:text-gray-50"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <Acknowledgement />
      <p className="text-center text-xs text-white">
        Copyright &copy; 2021, Zero Footprint Asia.
      </p>
    </div>
  </footer>
)
