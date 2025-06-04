"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RewardSystem() {
  const router = useRouter();
  const [isCalculateDialogOpen, setIsCalculateDialogOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationResult, setCalculationResult] = useState<{
    totalAmount: number;
    reward: number;
  } | null>(null);

  const handleCalculateRewards = () => {
    setIsCalculating(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      const totalAmount = parseFloat(amount || "0");
      const reward = totalAmount * 0.3; // 30% reward

      setCalculationResult({
        totalAmount,
        reward,
      });

      setIsCalculating(false);
    }, 1000);
  };

  const handleClaimBonus = () => {
    router.push("/#verification");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Reward System
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Earn rewards based on your crypto holdings and wallet activity. Our
          reward system is designed to benefit active Trust Wallet users.
        </p>

        <div className="grid gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Available Rewards
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#3375BB]" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Balance Rewards
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Earn 30% rewards based on your BTC and ETH holdings
                  </p>
                  <Button
                    className="bg-[#3375BB] hover:bg-[#0B65C6]"
                    onClick={() => setIsCalculateDialogOpen(true)}
                  >
                    Calculate Rewards
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#3375BB]" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Welcome Bonus
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Get $75 instantly when you verify your wallet
                  </p>
                  <Button
                    className="bg-[#3375BB] hover:bg-[#0B65C6]"
                    onClick={handleClaimBonus}
                  >
                    Claim Bonus
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              How Rewards Work
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                  Calculation Method
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Real-time balance checking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    30% reward on total value
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Instant reward delivery
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                  Eligibility
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Valid Trust Wallet
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    BTC or ETH holdings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Completed verification
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculate Rewards Dialog */}
      <Dialog
        open={isCalculateDialogOpen}
        onOpenChange={setIsCalculateDialogOpen}
      >
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Calculate Your Rewards</DialogTitle>
            <DialogDescription>
              Enter your amount to calculate your potential 30% reward
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Enter Your Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
              />
            </div>

            {calculationResult && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Your Reward Calculation
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between font-semibold">
                    <span>Your Amount:</span>
                    <span>
                      ${calculationResult.totalAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t border-blue-200 dark:border-blue-800 pt-2 mt-2">
                    <div className="flex justify-between font-bold text-[#3375BB]">
                      <span>Your 30% Reward:</span>
                      <span>${calculationResult.reward.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="space-x-2">
            <Button
              variant="outline"
              onClick={() => {
                setIsCalculateDialogOpen(false);
                setAmount("");
                setCalculationResult(null);
              }}
            >
              Close
            </Button>
            <Button
              onClick={handleCalculateRewards}
              disabled={isCalculating}
              className="bg-[#3375BB] hover:bg-[#0B65C6]"
            >
              {isCalculating && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isCalculating ? "Calculating..." : "Calculate Rewards"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
