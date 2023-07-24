import { AiFillGithub } from "react-icons/ai";
import { FooterStyled, Container, LinkContainer } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <LinkContainer href="https://github.com/VasilenkoYurii/my-wallet-app">
          <AiFillGithub />
          <p>VasilenkoYurii</p>
        </LinkContainer>
      </Container>
    </FooterStyled>
  );
};
