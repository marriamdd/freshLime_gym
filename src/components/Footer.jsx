import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="mb-[100px]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-around ">
          <Link
            to="HeroSection"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mb-6 md:mb-0"
          >
            <img
              src="/logo (1).png"
              className="h-8 mb-[30px] me-3"
              alt="FlowBite Logo"
            />
          </Link>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#555] uppercase ">
                Contact us
              </h2>
              <ul className=" text-gray-500 dark:text-gray-400  font-medium">
                <li className="mb-4">
                  <a>Tbilisi Georgia</a>
                </li>
                <li className="flex flex-col">
                  <span>+955551104862</span>
                  <span className="text-wrap text-[14px] md:text-[15px]">
                    davitashvili.m3@gmail.com
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#555]  uppercase ">
                Account
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 flex gap-[5px] flex-col font-medium">
                <a href="#" className="hover:underline ">
                  Github
                </a>

                <a href="#" className="hover:underline">
                  Create account
                </a>

                <a href="#" className="hover:underline ">
                  Sign in
                </a>

                <a href="#">IOS app</a>
                <a href="#">Android app</a>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#555]  uppercase ">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-[5px] font-medium">
                <li>
                  <a href="#" className="hover:underline">
                    About FreshLime
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    For Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#555]  uppercase ">
                Resourses
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-[5px] font-medium">
                <li>
                  <a href="#" className="hover:underline">
                    Working plan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy & Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    My other works
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center mt-[10px] sm:justify-between">
          <span className="text-sm text-[#087f5b]  sm:text-center ">
            Copyright © created in 2024 by Mariam Davitashvili
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a href="#" className="text-gray-500 hover:text-gray-900  ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900  ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
