import { MainStyled, Container } from "./Main.styled";
import { SendingForm } from "../SendingForm/SendingForm";

export const Main = () => {
  return (
    <MainStyled>
      <Container>
        <SendingForm />
      </Container>
    </MainStyled>
  );
};
