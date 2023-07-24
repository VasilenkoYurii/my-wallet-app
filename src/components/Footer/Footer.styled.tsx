import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
  flex: 0 0 auto;

  width: 100%;
  margin-top: auto;

  display: flex;
  justify-content: center;

  box-shadow: 0px 14px 20px 0px rgba(255, 255, 255, 0.5);
`;

export const Container = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  color: rgba(255, 255, 255, 0.87);
`;
