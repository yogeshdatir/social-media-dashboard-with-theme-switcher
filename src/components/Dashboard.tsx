import { ChangeEvent } from "react";
import {
  Attribution,
  Background,
  CardsFlex,
  Container,
  Flex,
  Header,
  Heading,
  Mask,
  SubHeader,
  SubTitle,
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
import Toggle from "./Toggle";
import { useToggleThemeContext } from "../contexts/themeToggleContext";

type Props = {};

const logoSwitcher = (socialMedia: string) => {
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

export function nFormatter(num: number, digits: number) {
  const lookup: {
    value: number;
    symbol: string;
    threshold?: number;
  }[] = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k", threshold: 1e4 },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx: RegExp = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item:
    | {
        value: number;
        symbol: string;
        threshold?: number;
      }
    | undefined = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return item.threshold ? num >= item.threshold : num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

const colorSwitcher = (socialMedia: string) => {
  switch (socialMedia) {
    case "facebook":
      return { color: "#178ff5" };
    case "twitter":
      return { color: "#1DA1F2" };
    case "instagram":
      return {
        gradient:
          "linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%);",
      };
    case "youtube":
      return { color: "#C4032B" };

    default:
      return { color: "#178ff5" };
  }
};

const Dashboard = (props: Props) => {
  const { currentThemeName, setCurrentThemeName } = useToggleThemeContext();

  return (
    <Background>
      <Mask></Mask>
      <Container>
        <Header>
          <VStack>
            <Heading>Social Media Dashboard</Heading>
            <SubTitle>Total Followers: 23,004</SubTitle>
          </VStack>
          <Toggle
            onChange={(event: ChangeEvent) => {
              currentThemeName === "light"
                ? setCurrentThemeName("dark")
                : setCurrentThemeName("light");
            }}
            label="Dark Mode"
          />
        </Header>
        <CardsFlex>
          {mainCards.map(
            ({ username, statValue, change, socialMedia }: IMainCardsData) => {
              return (
                <MainCard
                  key={socialMedia}
                  username={username}
                  statValue={statValue}
                  change={change}
                  borderColor={colorSwitcher(socialMedia)}
                  SVGSocialMediaLogo={logoSwitcher(socialMedia)}
                />
              );
            }
          )}
        </CardsFlex>
        <Flex direction="column">
          <SubHeader>Overview - Today</SubHeader>
          <CardsFlex>
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
                return (
                  <OverviewCard
                    key={index}
                    statName={statName}
                    statValue={statValue}
                    percentageChange={percentageChange}
                    SVGSocialMediaLogo={logoSwitcher(socialMedia)}
                  />
                );
              }
            )}
          </CardsFlex>
        </Flex>

        <Attribution>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H/hub/social-media-dashboard-with-theme-switcher-oaN0VBvz3z"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/yogeshdatir"
            target="_blank"
            rel="noreferrer"
          >
            Yogesh D
          </a>
          .
        </Attribution>
      </Container>
    </Background>
  );
};

export default Dashboard;
