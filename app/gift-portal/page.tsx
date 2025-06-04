import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GiftPortal() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Gift Portal
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Welcome to the Trust Wallet Gift Portal. Claim your rewards and manage
          your crypto gifts all in one place.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Available Gifts
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Welcome Gift
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  $75 instant reward for new users
                </p>
              </div>
              <Button className="bg-[#3375BB] hover:bg-[#0B65C6]">
                Claim Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Balance Rewards
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  30% rewards on your crypto holdings
                </p>
              </div>
              <Button className="bg-[#3375BB] hover:bg-[#0B65C6]">
                Check Eligibility <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              How It Works
            </h2>
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#3375BB] text-white text-sm mr-3">
                  1
                </span>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect your Trust Wallet
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#3375BB] text-white text-sm mr-3">
                  2
                </span>
                <p className="text-gray-600 dark:text-gray-300">
                  Verify your wallet ownership
                </p>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#3375BB] text-white text-sm mr-3">
                  3
                </span>
                <p className="text-gray-600 dark:text-gray-300">
                  Claim your rewards instantly
                </p>
              </li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Gift History
            </h2>
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">
                No gifts claimed yet
              </p>
              <Button variant="outline" className="mt-4">
                View All Transactions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
