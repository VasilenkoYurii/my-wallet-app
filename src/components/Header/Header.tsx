import logo from "../../assets/fox.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { toast } from "react-hot-toast";
import { setAddress, setBalance } from "../../redux/walletSlice";
import { selectAddress, selectBalance } from "../../redux/selectors";
import { formatAddress } from "../../helper/formatAddress";
import {
  HeaderStyled,
  Logo,
  ConnectButton,
  Container,
  ConnectedBox,
} from "./Header.styled";

declare global {
  interface Window {
    ethereum: any;
  }
}

interface Props {
  signer?: JsonRpcSigner;
  setSigner: Function;
}

export const Header = ({ signer, setSigner }: Props) => {
  const dispatch = useDispatch();
  const balance: string = useSelector(selectBalance);
  const address: string = useSelector(selectAddress);

  const connectWallet = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        const provider = new Web3Provider(window.ethereum);
        // console.log("Ethereum provider detected!");
        const { chainId } = await provider.getNetwork();
        if (chainId !== 5) {
          throw new Error("Change network to Goerli");
        }
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        setSigner(signer);
        toast.success("You are connected!");
      } else if (
        window.innerWidth >= 200 &&
        window.innerWidth <= 500 &&
        !window.ethereum
      ) {
        toast.error(
          "MetaMask app not found. Please download the app on your mobile device and use MetaMask mobile browser"
        );
        return;
      } else {
        toast.error(
          "MetaMask extension not found. Please install the MetaMask extension on your browser"
        );
        return;
      }
    } catch (err) {
      console.error("Error connecting wallet:", err);
    }
  };
  useEffect(() => {
    const getBalance = async () => {
      if (!signer) return;
      const balance = await signer.getBalance();
      const formattedBalance = parseFloat(
        ethers.formatEther(balance.toString())
      ).toFixed(3);
      const address = await signer.getAddress();
      dispatch(setAddress(address));
      dispatch(setBalance(formattedBalance));
      // console.log("Balance: ", formattedBalance);
      // console.log("Address: " + address);
    };
    getBalance();
  }, [signer, dispatch]);

  return (
    <HeaderStyled>
      <Container>
        <Logo src={logo} alt="logo" />
        {balance !== "" && address !== "" ? (
          <ConnectedBox>
            <p>{balance}</p>
            <p>{formatAddress(address)}</p>
          </ConnectedBox>
        ) : (
          <ConnectButton onClick={connectWallet}>Connect wallet</ConnectButton>
        )}
      </Container>
    </HeaderStyled>
  );
};
