import styled from "@emotion/styled";

export const MainStyled = styled.main`
  flex: 1 0 auto;

  width: 100%;

  display: flex;
  justify-content: center;
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

export const Form = styled.form``;
