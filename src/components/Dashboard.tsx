import React from "react";
import {
  Background,
  Container,
  Flex,
  Header,
  SubHeader,
  VStack,
} from "./Dashboard.styled";
import MainCard from "./MainCard";
import { ReactComponent as FacebookLogo } from "../images/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../images/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../images/icon-twitter.svg";
import { ReactComponent as YoutubeLogo } from "../images/icon-youtube.svg";
import {
  IMainCardsData,
  IOverviewCardsData,
  mainCards,
  overviewCards,
} from "./data";
import OverviewCard from "./OverviewCard";

type Props = {};

const LogoSwitcher = (socialMedia: string) => {
  switch (socialMedia) {
    case "facebook":
      return <FacebookLogo />;
    case "instagram":
      return <InstagramLogo />;
    case "twitter":
      return <TwitterLogo />;
    case "youtube":
      return <YoutubeLogo />;

    default:
      return <FacebookLogo />;
  }
};

const Dashboard = (props: Props) => {
  return (
    <Background>
      <Container>
        <Header>
          <VStack>
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </VStack>
        </Header>
        <Flex gap="2rem">
          {mainCards.map(
            ({ username, statValue, change, socialMedia }: IMainCardsData) => {
              return (
                <MainCard
                  key={socialMedia}
                  username={username}
                  year={statValue}
                  change={change}
                  SVGSocialMediaLogo={LogoSwitcher(socialMedia)}
                />
              );
            }
          )}
        </Flex>
        <Flex direction="column">
          <SubHeader>Overview - Today</SubHeader>
          <Flex wrap="wrap" gap="1.5rem 0" justifyContent="space-between">
            {overviewCards.map(
              (
                {
                  statName,
                  socialMedia,
                  statValue,
                  percentageChange,
                }: IOverviewCardsData,
                index: number
              ) => {
                return <OverviewCard key={index} />;
              }
            )}
          </Flex>
        </Flex>
      </Container>
    </Background>
  );
};

export default Dashboard;
