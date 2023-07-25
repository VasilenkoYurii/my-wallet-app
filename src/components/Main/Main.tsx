import { JsonRpcSigner } from "@ethersproject/providers";
import { MainStyled, Container } from "./Main.styled";
import { SendingForm } from "../SendingForm/SendingForm";

interface Props {
  signer?: JsonRpcSigner;
}

export const Main = ({ signer }: Props) => {
  return (
    <MainStyled>
      <Container>
        <SendingForm signer={signer} />
      </Container>
    </MainStyled>
  );
};
