import { useState, ChangeEvent } from "react";
import { Formik } from "formik";
import { Wallet } from "../../interfaces/interfaces";

import {
  MainForm,
  FormTitle,
  Label,
  Input,
  Button,
} from "./SendingForm.styled";

export const SendingForm = () => {
  const [wallet, setWallet] = useState("");
  const [quantity, setQuantity] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    name === "wallet" ? setWallet(value) : setQuantity(value);
  };

  const handleSubmit = (values: Wallet, { resetForm }: any) => {
    console.log(values);

    resetForm();
    const userObj: Wallet = {
      wallet: wallet,
      quantity: quantity,
    };

    console.log(userObj);

    setWallet("");
    setQuantity("");
  };

  return (
    <Formik initialValues={{ wallet, quantity }} onSubmit={handleSubmit}>
      <MainForm autoComplete="off">
        <FormTitle>Send form</FormTitle>
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
            // pattern="/^(0x)?[0-9a-fA-F]{40}$/"
            required
            onChange={onChange}
            value={quantity}
          />
        </Label>

        <Button type="submit">Send</Button>
      </MainForm>
    </Formik>
  );
};
