import React from "react";
import { Flex } from "./Dashboard.styled";
import { ChangedFollowers } from "./MainCard.styled";
import {
  OverviewCardContainer,
  StatName,
  StatValue,
} from "./OverviewCard.styled";
import { ReactComponent as UpArrow } from "../images/icon-up.svg";
import { ReactComponent as DownArrow } from "../images/icon-down.svg";
import { nFormatter } from "./Dashboard";

interface IProps {
  statName: string;
  SVGSocialMediaLogo: React.SVGProps<SVGSVGElement>;
  statValue: number;
  percentageChange: number;
}

const OverviewCard = ({
  statName,
  statValue,
  percentageChange,
  SVGSocialMediaLogo,
}: IProps) => {
  return (
    <OverviewCardContainer>
      <Flex justifyContent="space-between" width="100%">
        <>
          <StatName>{statName}</StatName>
          {SVGSocialMediaLogo}
        </>
      </Flex>
      <Flex justifyContent="space-between" width="100%" alignItems="flex-end">
        <StatValue>{nFormatter(statValue, 2)}</StatValue>
        <Flex alignItems="center" gap={4}>
          {percentageChange > 0 ? <UpArrow /> : <DownArrow />}
          <ChangedFollowers isPositive={percentageChange > 0}>
            {Math.abs(percentageChange)}%
          </ChangedFollowers>
        </Flex>
      </Flex>
    </OverviewCardContainer>
  );
};

export default OverviewCard;
