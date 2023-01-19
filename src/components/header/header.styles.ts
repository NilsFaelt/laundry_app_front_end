import styled from "styled-components";
import * as globalStyles from "../../styles/globalStyles";
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { colors } from "../../styles/colors";

interface MenuProps {
  animation: string;
}

export const Container = styled(globalStyles.FlexedContainerRow)`
  position: absolute;
  top: 0;
  justify-content: space-between;
  width: 100vw;
  height: 70px;
  box-shadow: 0px 0px 10px;
`;

export const Title = styled(globalStyles.MainTitle)`
  margin-left: 30px;
`;
export const Date = styled.p`
  color: ${colors.white};
  margin 0 auto;

`;
export const User = styled(CiUser)`
  color: white;
  position: absolute;
  right: 1px;
  transform: scale(2.8);
  margin-right: 30px;
  &:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
`;

export const Mail = styled(AiOutlineMail)`
  color: white;
  position: absolute;
  left: 25px;
  transform: scale(2.8);
  &:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
`;

export const UserDark = styled(User)`
  color: grey;
`;

export const UserMenu = styled(globalStyles.FlexedContainerCollumn)<MenuProps>`
position:absolute;
top:70px;
right:0vw;
height:10vh;
width:clamp(300px, 30vw, 500px);
border-radius:5px 0px 0px 5px;
background-color:${colors.primary};
box-shadow:10px 10px 10px  black;
animation-name: ${(props) => props.animation};
animation-duration: 0.5s;
animation-fill-mode: forwards;

@keyframes open-animation {
    0% { height: 0vh;
         width: 0vw; }

    100% { height:50vh;
        width:clamp(300px, 30vw, 500px)
        box-shadow:10px 10px 10px grey;
        ; }
   }
@keyframes close-animation {
    0% { height:50vh;
        width:clamp(300px, 30vw, 500px); }
    100% { height: 0vh;
         width: 0vw; }
 
   }
`;
