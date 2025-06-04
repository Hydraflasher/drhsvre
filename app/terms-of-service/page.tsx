import { Scale } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Scale className="h-8 w-8 text-[#3375BB] mr-3" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing or using Trust Wallet Gifts, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. Service Description</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>Trust Wallet Gifts provides:</p>
              <ul className="list-disc pl-6">
                <li>Cryptocurrency wallet verification services</li>
                <li>Digital asset rewards and gifts</li>
                <li>Balance checking functionality</li>
                <li>Related blockchain services</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. User Obligations</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>You agree to:</p>
              <ul className="list-disc pl-6">
                <li>Provide accurate information</li>
                <li>Maintain the security of your wallet</li>
                <li>Comply with all applicable laws</li>
                <li>Not engage in fraudulent activities</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. Rewards and Gifts</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>Terms for rewards and gifts:</p>
              <ul className="list-disc pl-6">
                <li>Rewards are subject to verification</li>
                <li>Gift amounts may vary</li>
                <li>Processing times may vary</li>
                <li>We reserve the right to modify or cancel rewards</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Trust Wallet Gifts is not liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">6. Modifications</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h2>
            <p className="text-gray-600 dark:text-gray-300">
              For questions about these Terms of Service, please contact legal@trustwallet.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}