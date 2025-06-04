import { Cookie } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Cookie className="h-8 w-8 text-[#3375BB] mr-3" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Cookie Policy</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">What Are Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and understand how you use our service.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Essential Cookies</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Required for the website to function properly. They enable basic functions like page navigation and access to secure areas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Performance Cookies</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Functionality Cookies</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Remember choices you make to improve your experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">How We Use Cookies</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>We use cookies to:</p>
              <ul className="list-disc pl-6">
                <li>Understand how you use our website</li>
                <li>Remember your preferences</li>
                <li>Improve our services</li>
                <li>Provide a better user experience</li>
                <li>Keep our services secure</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Managing Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may affect the functionality of our service.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about our Cookie Policy, please contact us at privacy@trustwallet.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}