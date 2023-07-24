import logo from "../../assets/fox.png";
import { HeaderStyled, Logo, ConnectButton, Container } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo src={logo} alt="logo" />
        <ConnectButton>Connect wallet</ConnectButton>
      </Container>
    </HeaderStyled>
  );
};
