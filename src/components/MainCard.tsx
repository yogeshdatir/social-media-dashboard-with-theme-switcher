import React from "react";
import {
  ChangedFollowers,
  Followers,
  MainCardContainer,
  Username,
  StatValue,
} from "./MainCard.styled";
import { Flex } from "./Dashboard.styled";
import { ReactComponent as UpArrow } from "../images/icon-up.svg";
import { ReactComponent as DownArrow } from "../images/icon-down.svg";
import { nFormatter } from "./Dashboard";

export interface IBorderColor {
  color?: string;
  gradient?: string;
}

export interface IMainCardProps {
  username: string;
  statValue: number;
  change: number;
  borderColor: IBorderColor;
  SVGSocialMediaLogo: React.SVGProps<SVGSVGElement>;
}

const MainCard = ({
  username,
  statValue,
  change,
  borderColor,
  SVGSocialMediaLogo,
}: IMainCardProps) => {
  return (
    <MainCardContainer borderColor={borderColor}>
      <Flex gap={8}>
        <>
          {SVGSocialMediaLogo}
          <Username>@{username}</Username>
        </>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        gap={9}
      >
        <StatValue>{nFormatter(statValue, 2)}</StatValue>
        <Followers>Followers</Followers>
      </Flex>
      <Flex alignItems="center" gap={4}>
        {change > 0 ? <UpArrow /> : <DownArrow />}
        <ChangedFollowers isPositive={change > 0}>
          {Math.abs(change)} Today
        </ChangedFollowers>
      </Flex>
    </MainCardContainer>
  );
};

export default MainCard;
