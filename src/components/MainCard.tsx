import React from "react";
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
import { ReactComponent as DoenArrow } from "../images/icon-down.svg";

type Props = {
  username: string;
  year: number;
  change: number;
};

const MainCard = (props) => {
  return (
    <MainCardContainer>
      <Flex gap={8}>
        <FbLogo />
        <Username>@nathanf</Username>
      </Flex>
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        gap={9}
      >
        <Year>1987</Year>
        <Followers>Followers</Followers>
      </Flex>
      <Flex alignItems="center" gap={4}>
        <UpArrow />
        <ChangedFollowers>12 Today</ChangedFollowers>
      </Flex>
    </MainCardContainer>
  );
};

export default MainCard;
