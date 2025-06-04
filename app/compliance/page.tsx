import { Scale, Shield, FileCheck, AlertTriangle } from 'lucide-react';

export default function Compliance() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Scale className="h-8 w-8 text-[#3375BB] mr-3" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Compliance</h1>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Trust Wallet Gifts maintains strict compliance with regulatory requirements and industry standards to ensure secure and legitimate cryptocurrency transactions.
        </p>

        <div className="grid gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <Shield className="h-8 w-8 text-[#3375BB] mb-4" />
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Regulatory Compliance</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">KYC/AML Policies</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We implement strict Know Your Customer (KYC) and Anti-Money Laundering (AML) policies to prevent fraudulent activities.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Protection</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We comply with global data protection regulations to ensure your personal information is secure.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Financial Regulations</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our services adhere to relevant financial regulations and cryptocurrency laws.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <FileCheck className="h-8 w-8 text-[#3375BB] mb-4" />
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Compliance Standards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Security Standards</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• ISO 27001 certification</li>
                  <li>• PCI DSS compliance</li>
                  <li>• Regular security audits</li>
                  <li>• Penetration testing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Operational Standards</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Transaction monitoring</li>
                  <li>• Risk assessment</li>
                  <li>• Staff training</li>
                  <li>• Incident response</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <AlertTriangle className="h-8 w-8 text-[#3375BB] mb-4" />
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Reporting & Transparency</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Regular Audits</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We conduct regular internal and external audits to ensure compliance with all relevant regulations and standards.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Suspicious Activity Reporting</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We maintain robust systems for detecting and reporting suspicious activities in accordance with regulatory requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Transparency Reports</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Regular publication of transparency reports detailing our compliance efforts and security measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}