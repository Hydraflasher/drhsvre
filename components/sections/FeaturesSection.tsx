"use client";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { BarChart4, Check, Gift, Lock, RefreshCcw, Wallet } from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  {
    icon: <Gift className="h-10 w-10 text-[#3375BB]" />,
    title: "$75 Instant Gift",
    description:
      "Claim your $75 gift instantly to your Trust Wallet by verifying your wallet phrase.",
  },
  {
    icon: <BarChart4 className="h-10 w-10 text-[#3375BB]" />,
    title: "30% Balance Rewards",
    description:
      "Earn 30% rewards based on your existing BTC and ETH wallet balances.",
  },
  {
    icon: <Lock className="h-10 w-10 text-[#3375BB]" />,
    title: "Secure Verification",
    description:
      "Our wallet verification process is secure and follows industry-standard protocols.",
  },
  {
    icon: <Wallet className="h-10 w-10 text-[#3375BB]" />,
    title: "Multi-Wallet Support",
    description:
      "Compatible with Trust Wallet, Exodus, and most common cryptocurrency wallets.",
  },
  {
    icon: <RefreshCcw className="h-10 w-10 text-[#3375BB]" />,
    title: "Real-time Balance Check",
    description:
      "We use open APIs to check your BTC and ETH balances in real-time.",
  },
  {
    icon: <Check className="h-10 w-10 text-[#3375BB]" />,
    title: "Instant Processing",
    description:
      "No waiting periods. All rewards and gifts are processed instantly.",
  },
];

const FeaturesSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Unlock the Full Potential of Your Wallet
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform offers exclusive rewards and gifts for Trust Wallet
              users
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "p-6 rounded-xl transition-all duration-300",
                "bg-white dark:bg-gray-800 shadow-md hover:shadow-lg",
                "border border-gray-200 dark:border-gray-700"
              )}
            >
              <div className="p-3 rounded-full w-fit bg-blue-100 dark:bg-blue-900/30 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
