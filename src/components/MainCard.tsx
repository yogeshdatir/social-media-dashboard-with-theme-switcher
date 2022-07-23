import React, { ReactSVG } from "react";
import {
  ChangedFollowers,
  Followers,
  MainCardContainer,
  Username,
  Year,
} from "./MainCard.styled";
import { ReactComponent as FbLogo } from "../images/icon-facebook.svg";
import { Flex } from "./Dashboard.styled";
import { ReactComponent as UpArrow } from "../images/icon-up.svg";
import { ReactComponent as DownArrow } from "../images/icon-down.svg";

export interface IMainCardProps {
  username: string;
  year: number;
  change: number;
  SVGSocialMediaLogo: React.SVGProps<SVGSVGElement>;
}

const MainCard = ({
  username,
  year,
  change,
  SVGSocialMediaLogo,
}: IMainCardProps) => {
  return (
    <MainCardContainer>
      <Flex gap={8}>
        <>
          {SVGSocialMediaLogo}
          <Username>@{username}</Username>
        </>
      </Flex>
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        gap={9}
      >
        <Year>{year}</Year>
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
