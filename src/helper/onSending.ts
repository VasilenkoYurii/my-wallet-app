import { ethers } from "ethers";
import { toast } from "react-hot-toast";

import { setBalance } from "../redux/walletSlice";
import { JsonRpcSigner } from "@ethersproject/providers";

const isValidAddress = (recipientAddress: string) => {
  const addressRegex = /^0x[a-fA-F0-9]{40}$/;
  const isFormatValid = addressRegex.test(recipientAddress);
  const isValidChecksum = ethers.isAddress(recipientAddress);
  return isFormatValid && isValidChecksum;
};

export const onSending = async (
  wallet: string,
  quantity: string,
  setLoading: Function,
  signer: JsonRpcSigner | undefined,
  balance: string,
  dispatch: Function
) => {
  try {
    if (!signer || !wallet || !quantity) {
      toast.error(
        "Please make sure you are connected to MetaMask and have entered both recipient address and amount"
      );
      return;
    }
    setLoading(true);

    if (Number(quantity) < 0.000001 || Number(quantity) > 100000) {
      toast.error("Please enter a valid amount between 0.000001 and 100000");
      setLoading(false);
      return;
    }

    if (Number(quantity) > 1 && Number(quantity) % 10 !== 0) {
      toast.error("Please enter an amount that is a multiple of 10");
      setLoading(false);
      return;
    }

    if (Number(quantity) > Number(balance)) {
      toast.error("Not enough funds");
      setLoading(false);
      return;
    }

    if (!isValidAddress(wallet)) {
      toast.error("Please enter a valid Ethereum wallet address");
      setLoading(false);
      return;
    }

    const amountInWei = ethers.parseEther(quantity);

    const tx = await signer.sendTransaction({
      to: wallet,
      value: amountInWei,
    });
    toast.success("We are attempting a transaction, please wait.");
    const receipt = await tx.wait();
    toast.success("Transaction sent successfully!");
    const newBalance = parseFloat(
      (Number(balance) - Number(quantity)).toString()
    ).toFixed(3);
    dispatch(setBalance(newBalance));
  } catch (error) {
    console.error("Error transferring tokens:", error);
    toast.error("Error transferring tokens. Please try again later");
  } finally {
    setLoading(false);
  }
};
