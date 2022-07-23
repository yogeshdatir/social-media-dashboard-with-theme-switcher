import styled from "@emotion/styled";
import { IBorderColor } from "./MainCard";

interface IMainCardContainerProps {
  borderColor: IBorderColor;
}

export const ResponsiveGrid = styled.div`
  width: 22.75%;
  @media (max-width: 1079px) {
    width: 31.33%;
  }
  @media (max-width: 720px) {
    width: 48%;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const MainCardContainer = styled(
  ResponsiveGrid
)<IMainCardContainerProps>`
  height: 13.5rem;
  background: #f1f3fa;
  border-radius: 5px;
  padding: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  /* https://dev.to/afif/border-with-gradient-and-radius-387f - Border with gradient and border-radius */

  ::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 5px;
    padding: 0;
    padding-top: 5px;
    background: ${({
      borderColor: { gradient, color },
    }: IMainCardContainerProps) => (gradient ? gradient : color)};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const Username = styled.p`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #63687d;
`;

export const StatValue = styled.p`
  font-weight: 700;
  font-size: 56px;
  line-height: 48px;
  /* identical to box height, or 86% */

  text-align: center;
  letter-spacing: -2px;

  color: #1d1f29;
`;

export const Followers = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;

  color: #63687d;
`;

interface IChangeFollowersProps {
  isPositive?: boolean;
}

export const ChangedFollowers = styled.p<IChangeFollowersProps>`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: ${({ isPositive }: IChangeFollowersProps) =>
    isPositive ? "#1eb589" : "#DC414C"};
`;
