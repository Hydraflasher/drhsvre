"use client";

import { motion } from "@/lib/motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    role: "Crypto Investor",
    content:
      "I was skeptical at first, but after verifying my wallet, I received my $75 gift immediately. The 30% rewards on my BTC balance was an amazing bonus!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    role: "Blockchain Developer",
    content:
      "As someone who works in blockchain, I was impressed by the secure verification process. The rewards were credited instantly to my Trust Wallet.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    avatar:
      "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=150",
    role: "Crypto Enthusiast",
    content:
      "The verification was simple and the gift came through as promised. Great way to get some extra value from my existing crypto holdings!",
    rating: 4,
  },
  {
    name: "David Patel",
    avatar:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
    role: "Long-term Holder",
    content:
      "I've been holding BTC for years and was pleasantly surprised to get rewarded for it. The process was seamless and customer support was excellent.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied users who have claimed their rewards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/reviews"
            className=" px-6 py-3 text-base font-medium text-white bg-[#3375BB] rounded-lg hover:bg-[#2a5f96] transition-colors"
          >
            See All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
