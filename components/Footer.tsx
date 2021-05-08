import Link from "next/link"
import { Config } from "Config"
const { navigation } = Config

export const Footer = () => (
  <footer className="bg-green">
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
      <div className="max-w-xl mx-auto">
        <p className="text-xs text-white text-center">
          Credits &amp; Acknowledgement:{" "}
          <a className="text-white" target="_blank" href="">
            Denis Tsoi
          </a>{" "}
          (Tech),{" "}
          <a className="text-white" target="_blank" href="">
            Eva Ma
          </a>{" "}
          (Graphic Design),{" "}
          <a
            className="text-white"
            target="_blank"
            href="https://www.shannonyeung.com/"
          >
            Shannon Yeung
          </a>{" "}
          (Graphic Design),{" "}
          <a className="text-white" target="_blank" href="">
            Maggie Tan
          </a>{" "}
          (Translations),{" "}
          <a
            className="text-white"
            target="_blank"
            href="https://www.capsule48.com/"
          >
            Capsule48,
          </a>{" "}
          (Video Production){" "}
          <a className="text-white" target="_blank" href="">
            Amanda Kho, Ken Wu
          </a>{" "}
          (Photography).{" "}
        </p>
      </div>
      <p className="text-center text-xs text-white">
        Copyright &copy; 2021, Zero Footprint Asia.
      </p>
    </div>
  </footer>
)
