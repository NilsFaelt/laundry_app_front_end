import styled from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";
import { Calendar } from "../navbar/navbar.styles";
import * as globalStyles from "../../styles/globalStyles";
import { NavLink } from "react-router-dom";

export const BackgroundContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-image: url(${laundryImg});
  padding-bottom: 30vh;
`;
export const Container = styled(globalStyles.FlexedContainerCollumn)`
  position: relative;
  margin: 0 auto;
  height: auto;
  margin-top: 20vh;
  width: clamp(300px, 50%, 500px);
  background-color: ${colors.primary};
  padding: calc(20px + 2vw);
  border-radius: 5px;
  box-shadow: 10px 10px 10px;
`;

export const Title = styled.h2`
  margin-top: 2vh;
  margin-bottom: 2vh;
  font-size: 20px;
  color: ${colors.white};
  text-align: center;
`;
export const ChooseTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 15px;
  color: ${colors.white};
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;
export const CalendarLink = styled(Calendar)`
  position: absolute;
  top: 15px;
  left: 15px;
  transform: scale(2.5);
  color: ${colors.white};
  &:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
`;
