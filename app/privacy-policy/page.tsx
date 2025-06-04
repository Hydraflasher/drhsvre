import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Shield className="h-8 w-8 text-[#3375BB] mr-3" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Trust Wallet Gifts ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                <li>Wallet addresses</li>
                <li>Transaction history</li>
                <li>Balance information</li>
                <li>Device information</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">How We Use Your Information</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>We use the collected information for:</p>
              <ul className="list-disc pl-6">
                <li>Processing rewards and gifts</li>
                <li>Verifying wallet ownership</li>
                <li>Providing customer support</li>
                <li>Improving our services</li>
                <li>Preventing fraud and abuse</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We implement appropriate technical and organizational measures to maintain the security of your personal information, including encryption and secure storage practices.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Your Rights</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at privacy@trustwallet.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}