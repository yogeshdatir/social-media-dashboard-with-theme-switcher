import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}

export interface IThemeContainer {
  light: ITheme;
  dark: ITheme;
}

export interface ITheme {
  color: Color;
  background: Background;
}

export interface Color {
  primary: string;
  secondary: string;
}

export interface Background {
  card: string;
  body: Body;
}

export interface Body {
  primary: string;
  secondary: string;
}

export const Themes: IThemeContainer = {
  dark: {
    color: {
      primary: "hsl(0, 0%, 100%)",
      secondary: "hsl(228, 34%, 66%)",
    },
    background: {
      card: "hsl(228, 28%, 20%)",
      body: {
        primary: "hsl(230, 17%, 14%)",
        secondary: "hsl(232, 19%, 15%)",
      },
    },
  },
  light: {
    color: {
      primary: "hsl(230, 17%, 14%)",
      secondary: "hsl(228, 12%, 44%)",
    },
    background: {
      card: "hsl(227, 47%, 96%)",
      body: {
        primary: " hsl(0, 0%, 100%)",
        secondary: "hsl(225, 100%, 98%)",
      },
    },
  },
};
