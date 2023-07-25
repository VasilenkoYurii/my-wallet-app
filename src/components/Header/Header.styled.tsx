import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  width: 100%;
  box-shadow: 0px -14px 20px 0px rgba(255, 255, 255, 0.5);

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const Logo = styled.img`
  display: block;
  height: 50px;

  margin-left: 20px;
`;

export const ConnectButton = styled.button`
  margin-right: 20px;

  background-color: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Caveat", sans-serif;
  font-size: 16px;
  line-height: 29px;
  padding: 0 5px 0 5px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  max-width: 160px;
  transition-duration: 500ms;
  transition-property: all;

  &:hover {
    background-color: #fff;
    box-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff;
  }
`;

export const ConnectedBox = styled.div`
  margin-right: 20px;

  background-color: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;

  display: flex;
  gap: 20px;
  font-family: "Caveat", sans-serif;
  font-size: 16px;
  line-height: 29px;
  padding: 0 5px 0 5px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  max-width: 160px;
`;
