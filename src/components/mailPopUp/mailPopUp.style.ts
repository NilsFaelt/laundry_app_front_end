import styled from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import * as globalStyles from "../../styles/globalStyles";
import { AiOutlineRollback } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { SlPencil } from "react-icons/sl";
import { colors } from "../../styles/colors";

interface MailProps {
  animation: string;
}
export const Container = styled.div`
  z-index: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(330px, 70vw, 800px);
  height: 75vh;
  padding: 20px;
  padding-bottom: 40px;
  background-color: ${colors.primaryDark};
  border-radius: 5px;
  box-shadow: 10px 10px 10px;
  border: 1px solid white;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  color: ${colors.white};
`;
export const ClickableTitle = styled.h2`
  font-size: 16px;
  margin-top: 20px;
  color: ${colors.white};
  cursor: pointer;
  text-decoration: underline;
`;
export const P = styled.p`
  font-size: 14px;
  font-weight: bolder;
  margin-top: 8px;
  margin-left: 8px;
  color: white;
  cursor: pointer;
`;
export const ClickableText = styled.p`
  font-size: 14px;
  font-weight: bolder;
  margin-top: 8px;
  margin-left: 8px;
  color: ${colors.white};
  cursor: pointer;
  text-decoration: underline ${colors.showActiveLink};
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
`;

export const Label = styled.label`
  margin-top: 10px;
  color: white;
  font-size: 16px;
`;
export const LabelWarning = styled.label`
  margin-top: 5px;
  color: red;
  font-size: 14px;
`;

export const Input = styled(globalStyles.Input)`
  width: 70%;
  border: 1px solid black;
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0px;
  box-shadow: 0px;
  margin-right: 10px;
  font-size: 16px;
  font-family: italic;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const Btn = styled(globalStyles.MainBtn)`
  margin-top: 15px;
  box-shadow: 1px 1px 1px black;
`;

export const Back = styled(AiOutlineRollback)`
  position: absolute;
  left: 20px;
  color: white;
  transform: scale(2);
  &:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
`;
export const Pen = styled(SlPencil)`
  position: absolute;
  right: 25px;
  color: white;
  transform: scale(1.7);
  &:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
`;
export const Mail = styled(TfiEmail)`
  color: white;
  position: absolute;
  right: 75px;
  transform: scale(2);
  &:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
`;
export const SentMail = styled(TfiEmail)`
  color: white;
  position: absolute;
  left: 50px;
  bottom: 50px;
  scale: 3;
  opacity: 1;
  transform: scale(2);
  color: ${colors.showActiveLink};
  animation: mailAni 2s forwards;
  @keyframes mailAni {
    0% {
      opacity: 1;
      bottom: 50px;
      left: 50px;
      transform: rotate(0deg);
    }
    80% {
      color: ${colors.primaryDark};
      scale: 3;
      opacity: 1;
      bottom: 300px;
      left: 300px;
      transform: rotate(360deg);
    }
    100% {
      scale: 5;
      color: pink;
      bottom: 500px;
      left: 500px;
      opacity: 0;
    }
  }
`;

export const MailContainer = styled.div`
  margin-top: 50px;
  width: clamp(300px, 30vw, 500px);
  height: 80%;
  padding: 10px 10px 10px 10px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  height: 30vh;
  border: 1px solid black;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 16px;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const ShowMailAdresses = styled.div`
  z-index: 4;
  position: absolute;
  top: 230px;
  min-width: 50%;
  border-radius: 5px;
  border: 1px solid black;
  padding: 1px;
  height: 150px;
  background-color: ${colors.primaryDark};
  overflow: scroll;
  font-size: 14px;
`;
