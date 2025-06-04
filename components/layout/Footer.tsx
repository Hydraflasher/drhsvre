import { ExternalLink, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="flex items-center justify-center">
                <svg
                  width="39"
                  height="43"
                  viewBox="0 0 39 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  exponent="342423"
                  className=""
                >
                  <path
                    d="M0.710815 6.67346L19.4317 0.606445V42.6064C6.05944 37.0059 0.710815 26.2727 0.710815 20.207V6.67346Z"
                    fill="#0500FF"
                  ></path>
                  <path
                    d="M38.1537 6.67346L19.4329 0.606445V42.6064C32.8051 37.0059 38.1537 26.2727 38.1537 20.207V6.67346Z"
                    fill="url(#paint0_linear_524_75868342423)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_524_75868342423"
                      x1="33.1809"
                      y1="-2.33467"
                      x2="19.115"
                      y2="42.0564"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.02" stop-color="#0000FF"></stop>
                      <stop offset="0.08" stop-color="#0094FF"></stop>
                      <stop offset="0.16" stop-color="#48FF91"></stop>
                      <stop offset="0.42" stop-color="#0094FF"></stop>
                      <stop offset="0.68" stop-color="#0038FF"></stop>
                      <stop offset="0.9" stop-color="#0500FF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-[#0500FF] text-2xl font-bold ml-2">
                  Trust Wallet <span className="text-[#3375BB]">Gift</span>
                </p>
              </div>
            </Link>

            <p className="text-gray-600 dark:text-gray-400">
              The most secure and reliable way to claim crypto rewards on your
              Trust Wallet.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://x.com/trustwallet"
                target="_blank"
                className="text-gray-900 dark:text-white"
              >
                <svg
                  width="31"
                  height="31"
                  fill="none"
                  viewBox="0 0 31 31"
                  className="default-transition h-[31px] min-w-[31px] text-trustBlack dark:text-trustWhite default-transition text-trustBlue dark:!text-trustGreen"
                >
                  <rect width="31" height="31" rx="4"></rect>
                  <path
                    fill="#000000"
                    className="default-transition text-trustWhite dark:text-trustBlack"
                    d="m17.22 15.021 6.203-7.131h-1.47l-5.386 6.192-4.301-6.192H7.305l6.504 9.363-6.504 7.478h1.47l5.687-6.539 4.543 6.54h4.96L17.22 15.02Zm-2.013 2.315-.659-.933-5.244-7.419h2.258l4.232 5.988.659.932 5.5 7.783h-2.257l-4.489-6.351Z"
                  ></path>
                </svg>{" "}
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-gray-900 dark:text-white"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/trustwallet"
                target="_blank"
                className="text-gray-900 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/gift-portal"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Gift Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/reward-system"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Reward System
                </Link>
              </li>
              <li>
                <Link
                  href="/wallet-verification"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Wallet Verification
                </Link>
              </li>
              <li>
                <Link
                  href="/balance-checker"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Balance Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help-center"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <span>Trust Wallet</span>
                  <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-gray-600 hover:text-[#3375BB] dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <svg
              width="39"
              height="43"
              viewBox="0 0 39 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              exponent="342423"
              className="w-6 h-6 mr-2"
            >
              <path
                d="M0.710815 6.67346L19.4317 0.606445V42.6064C6.05944 37.0059 0.710815 26.2727 0.710815 20.207V6.67346Z"
                fill="#0500FF"
              ></path>
              <path
                d="M38.1537 6.67346L19.4329 0.606445V42.6064C32.8051 37.0059 38.1537 26.2727 38.1537 20.207V6.67346Z"
                fill="url(#paint0_linear_524_75868342423)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_524_75868342423"
                  x1="33.1809"
                  y1="-2.33467"
                  x2="19.115"
                  y2="42.0564"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.02" stop-color="#0000FF"></stop>
                  <stop offset="0.08" stop-color="#0094FF"></stop>
                  <stop offset="0.16" stop-color="#48FF91"></stop>
                  <stop offset="0.42" stop-color="#0094FF"></stop>
                  <stop offset="0.68" stop-color="#0038FF"></stop>
                  <stop offset="0.9" stop-color="#0500FF"></stop>
                </linearGradient>
              </defs>
            </svg>{" "}
            <span className="text-gray-600 dark:text-gray-400">
              Secured & Encrypted
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-right">
            © {currentYear} Trust Wallet Gifts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
