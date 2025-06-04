"use client";

import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";
import MyWallet from "@/public/images/image.png";
import { ArrowRight, CheckCircle, Shield, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium">
              <Zap size={16} className="mr-2" />
              <span>Limited Time Offer: $75 Gift Available Now</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Claim Your <span className="text-[#3375BB]">Trust Wallet</span>{" "}
              Gift Today
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300">
              Receive a $75 gift instantly to your wallet and earn up to 30%
              rewards on your BTC and ETH balances.
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-[#3375BB] hover:bg-[#0B65C6] text-white"
                onClick={() =>
                  document
                    .getElementById("verification")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Claim Your Gift
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                How It Works
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center">
                <CheckCircle size={18} className="text-green-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  Instant Delivery
                </span>
              </div>
              <div className="flex items-center">
                <Shield size={18} className="text-green-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  100% Secure
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl filter blur-3xl"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl">
              <Image
                src={MyWallet}
                alt="Trust Wallet Gift"
                width={600}
                height={400}
                priority
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Trusted by Millions
                  </h3>
                  <p className="text-gray-200">
                    Join the millions of users who have claimed their gifts
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
