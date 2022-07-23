export interface IMainCardsData {
  username: string;
  statValue: number;
  change: number;
  socialMedia: string;
}

export const mainCards: IMainCardsData[] = [
  {
    username: "nathanf",
    statValue: 1987,
    change: 12,
    socialMedia: "facebook",
  },
  {
    username: "nathanf",
    statValue: 1044,
    change: 99,
    socialMedia: "twitter",
  },
  {
    username: "@realnathanf",
    statValue: 11000,
    change: 1099,
    socialMedia: "instagram",
  },
  {
    username: "Nathan F.",
    statValue: 8239,
    change: -144,
    socialMedia: "youtube",
  },
];

export interface IOverviewCardsData {
  statName: string;
  socialMedia: string;
  statValue: number;
  percentageChange: number;
}

export const overviewCards: IOverviewCardsData[] = [
  {
    statName: "Page Views",
    socialMedia: "facebook",
    statValue: 87,
    percentageChange: 3,
  },
  {
    statName: "Likes",
    socialMedia: "facebook",
    statValue: 52,
    percentageChange: -2,
  },
  {
    statName: "Likes",
    socialMedia: "instagram",
    statValue: 5462,
    percentageChange: 2257,
  },
  {
    statName: "Profile Views",
    socialMedia: "instagram",
    statValue: 52205,
    percentageChange: 1375,
  },
  {
    statName: "Retweets",
    socialMedia: "twitter",
    statValue: 117,
    percentageChange: 303,
  },
  {
    statName: "Likes",
    socialMedia: "twitter",
    statValue: 507,
    percentageChange: 553,
  },
  {
    statName: "Likes",
    socialMedia: "youtube",
    statValue: 107,
    percentageChange: -19,
  },
  {
    statName: "Total Views",
    socialMedia: "youtube",
    statValue: 1470,
    percentageChange: -12,
  },
];
