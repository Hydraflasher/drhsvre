import { Shield, Lock, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Security() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Security</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Learn about our security measures and best practices to keep your wallet and rewards safe.
        </p>

        <div className="grid gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <Shield className="h-8 w-8 text-[#3375BB] mb-4" />
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Our Security Measures</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Wallet Protection</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Secure verification process
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    No private key storage
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Transaction Security</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Multi-signature support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Fraud detection
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <Lock className="h-8 w-8 text-[#3375BB] mb-4" />
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Security Best Practices</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Protect Your Recovery Phrase</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Never share your recovery phrase with anyone. Store it securely offline.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Enable Additional Security</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use biometric authentication and enable transaction signing.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Regular Updates</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Keep your Trust Wallet app updated to the latest version.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <AlertTriangle className="h-8 w-8 text-[#3375BB] mb-4" />
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Security Alerts</h2>
            <div className="space-y-4">
              <div className="p-4 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 rounded-lg">
                <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">Beware of Scams</h3>
                <p className="text-red-700 dark:text-red-400">
                  Trust Wallet will never ask for your recovery phrase via email or social media.
                </p>
              </div>
              <Button className="bg-[#3375BB] hover:bg-[#0B65C6] w-full">
                Report Security Issue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}