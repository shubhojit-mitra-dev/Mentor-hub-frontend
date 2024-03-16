import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <header>
      <MaxWidthWrapper>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 mt-4 shadow-2xl rounded-md">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="https://flowbite.com" className="flex items-center">
              <div className="w-9 h-12 mr-3">
                <Image
                  src="/logo.png"
                  width={1321}
                  height={1681}
                  alt="MentorHub Logo"
                />
              </div>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                MentorHub
              </span>
            </Link>
            <div className="flex items-center lg:order-2 gap-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Button variant="link" asChild>
                    <Link href="/" className="text-base">
                      Home
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/" className="text-base">
                      About Us
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button variant="link" asChild>
                    <Link href="/" className="text-base">
                      FAQs
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
