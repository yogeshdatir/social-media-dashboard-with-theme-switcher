import styled from "@emotion/styled";
import { ResponsiveGrid } from "./MainCard.styled";

export const OverviewCardContainer = styled(ResponsiveGrid)`
  height: 8rem;
  background: ${({ theme }) => theme.background.card};
  border-radius: 5px;
  padding: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StatName = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: ${({ theme }) => theme.color.secondary};
`;

export const StatValue = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: ${({ theme }) => theme.color.primary};
`;
