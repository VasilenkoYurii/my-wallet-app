import { useState, ChangeEvent } from "react";
import { Formik } from "formik";
import { JsonRpcSigner } from "@ethersproject/providers";
import { onSending } from "../../helper/onSending";
import { useSelector, useDispatch } from "react-redux";
import { ThreeDots } from "react-loader-spinner";
import { selectBalance } from "../../redux/selectors";

import {
  MainForm,
  FormTitle,
  Label,
  Input,
  Button,
} from "./SendingForm.styled";

interface Props {
  signer?: JsonRpcSigner;
}

export const SendingForm = ({ signer }: Props) => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  const [wallet, setWallet] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    name === "wallet" ? setWallet(value) : setQuantity(value);
  };

  const handleSubmit = async () => {
    try {
      await onSending(wallet, quantity, setLoading, signer, balance, dispatch);

      setWallet("");
      setQuantity("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik initialValues={{ wallet, quantity }} onSubmit={handleSubmit}>
      <MainForm autoComplete="off">
        <FormTitle>Transfer form</FormTitle>
        <Label>
          Wallet address
          <Input
            type="text"
            name="wallet"
            pattern="^(0x)?[0-9a-fA-F]{40}$"
            required
            onChange={onChange}
            value={wallet}
          />
        </Label>
        <Label>
          Quantity
          <Input
            type="text"
            name="quantity"
            required
            onChange={onChange}
            value={quantity}
          />
        </Label>

        <Button type="submit" disabled={loading} data-loading={loading}>
          {loading ? (
            <ThreeDots
              height="30"
              width="50"
              radius="9"
              color="#f15a24"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          ) : (
            "Transfer"
          )}
        </Button>
      </MainForm>
    </Formik>
  );
};
