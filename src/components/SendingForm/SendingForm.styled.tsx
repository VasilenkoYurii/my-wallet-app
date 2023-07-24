import styled from "@emotion/styled";
import { Form, Field } from "formik";
import { GrClose } from "react-icons/gr";

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  padding: 10px;
  border-radius: 10px;
  width: 270px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const CloseBox = styled(GrClose)`
  top: 10px;
  right: 10px;
  width: 22px;
  height: 22px;

  position: absolute;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
  }
`;

export const FormTitle = styled.h2`
  padding-top: 30px;
  text-transform: uppercase;
  font-weight: 400;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;

  font-size: 20px;
  font-weight: 300;

  width: 100%;
`;

export const Input = styled(Field)`
  font-size: 18px;
  height: 30px;

  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: inherit;
`;

export const Button = styled.button`
  margin-top: 20px;

  background-color: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Caveat", sans-serif;
  font-size: 20px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  width: 200px;
  transition-duration: 500ms;
  transition-property: all;

  &:hover {
    background-color: #fff;
    box-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 5px #fff;
  }
`;
