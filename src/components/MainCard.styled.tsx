import styled from "@emotion/styled";

export const MainCardContainer = styled.div`
  width: 16rem;
  height: 13.5rem;
  background: #f1f3fa;
  border-radius: 5px;
  padding: 1.5rem;
  box-sizing: border-box;
  border-top: 4px solid #178ff5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

export const Year = styled.p`
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
