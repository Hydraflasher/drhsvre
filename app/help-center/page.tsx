import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowRight,
  Book,
  Gift,
  HelpCircle,
  MessageCircle,
  Phone,
  RefreshCcw,
  Search,
  Shield,
  Wallet,
} from "lucide-react";

export default function HelpCenter() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Help Center
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Find answers to common questions and get support for Trust Wallet
          Gifts.
        </p>

        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for help articles..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3375BB]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <HelpCircle className="h-8 w-8 text-[#3375BB] mb-4" />
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Popular FAQs
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I claim my rewards?</AccordionTrigger>
                <AccordionContent>
                  To claim your rewards:
                  <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>Visit the Gift Portal or Wallet Verification page</li>
                    <li>Connect your Trust Wallet</li>
                    <li>Complete the verification process</li>
                    <li>
                      Your rewards will be automatically calculated and sent to
                      your wallet
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What is wallet verification?
                </AccordionTrigger>
                <AccordionContent>
                  Wallet verification is a secure process to confirm your
                  ownership of a Trust Wallet. It involves connecting your
                  wallet and proving ownership through our verification system.
                  This ensures only legitimate wallet owners can claim rewards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How are rewards calculated?</AccordionTrigger>
                <AccordionContent>
                  Rewards are calculated based on:
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>30% of your current BTC and ETH holdings value</li>
                    <li>$75 welcome bonus for new users</li>
                    <li>Additional bonuses for long-term holders</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Is my wallet secure during verification?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, your wallet is completely secure. We use
                  industry-standard encryption and never store your private keys
                  or sensitive information. All verification is done through
                  secure channels and complies with the highest security
                  standards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button variant="outline" className="mt-6 w-full">
              View All FAQs
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <Book className="h-8 w-8 text-[#3375BB] mb-4" />
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Guides
            </h2>
            <div className="space-y-4">
              <div className="group">
                <a
                  href="#"
                  className="block p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center">
                    <Wallet className="h-5 w-5 text-[#3375BB] mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#3375BB] transition-colors">
                        Getting Started Guide
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Learn how to set up and use Trust Wallet Gifts
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </div>

              <div className="group">
                <a
                  href="#"
                  className="block p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-[#3375BB] mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#3375BB] transition-colors">
                        Security Best Practices
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Keep your wallet and rewards safe
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </div>

              <div className="group">
                <a
                  href="#"
                  className="block p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center">
                    <Gift className="h-5 w-5 text-[#3375BB] mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#3375BB] transition-colors">
                        Rewards Guide
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Understanding rewards and calculations
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </div>

              <div className="group">
                <a
                  href="#"
                  className="block p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center">
                    <RefreshCcw className="h-5 w-5 text-[#3375BB] mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#3375BB] transition-colors">
                        Troubleshooting
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Common issues and solutions
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </div>
            </div>
            <Button variant="outline" className="mt-6 w-full">
              View All Guides
            </Button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Common Issues
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Verification Failed
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  If verification fails, ensure your wallet is properly
                  connected and try again. Check your internet connection and
                  browser compatibility.
                </p>
              </div>

              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Rewards Not Received
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Rewards are usually instant but may take up to 24 hours in
                  some cases. Contact support if you haven't received your
                  rewards after this period.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Wallet Connection Issues
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Make sure you have the latest version of Trust Wallet
                  installed and your browser is up to date. Try clearing your
                  browser cache.
                </p>
              </div>

              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Incorrect Balance Shown
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Balance updates may take a few minutes to reflect. If the
                  issue persists, try reconnecting your wallet or contact
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Contact Support
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <MessageCircle className="h-6 w-6 text-[#3375BB]" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Chat Support
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Available 24/7 for quick assistance
                </p>
                <Button className="bg-[#3375BB] hover:bg-[#0B65C6]">
                  Start Chat
                </Button>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-[#3375BB]" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Phone Support
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Call us for personal assistance
                </p>
                <Button className="bg-[#3375BB] hover:bg-[#0B65C6]">
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
