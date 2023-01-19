import styled from "styled-components";
import { colors } from "../../styles/colors";
import { MainBtn } from "../../styles/globalStyles";

export const Title = styled.h2`
  text-align: center;
  color: ${colors.white};
  margin-bottom: 30px;
  font-size: 20px;
  span {
    color: ${colors.showActiveLink};
  }
`;

export const P = styled.p`
  color: ${colors.white};
  font-size: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

export const FourBtnDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 30px;
  margin-bottom: 30px;
`;

export const Btn = styled(MainBtn)`
  height: auto;
  word-break: break-word;
  font-size: 14px;
`;
