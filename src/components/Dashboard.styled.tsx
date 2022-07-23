import styled from "@emotion/styled";

export const Background = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.background.body.primary};
  position: relative;
`;

export const Mask = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 244px;
  background-color: ${({ theme }) => theme.background.body.secondary};
  border-radius: 0px 0px 20px 20px;
`;

export const Container = styled.main`
  max-width: 1110px;
  margin: 0 auto;
  height: auto;
  min-height: 100vh;
  padding: 2.25rem 0 4.75rem 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 1200px) {
    padding: 2.25rem 1.5rem 4.75rem 1.5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;

  text-align: center;

  color: ${({ theme }) => theme.color.primary};
  padding-bottom: 3px;

  @media (max-width: 420px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: ${({ theme }) => theme.color.secondary};
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

interface IFlexProps {
  flexDirection?: "column" | "row" | "reverse-column" | "reverse-row";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: string | number;
  wrap?:
    | "nowrap"
    | "wrap"
    | "wrap-reverse"
    | "initial"
    | "inherit"
    | "revert"
    | "revert-layer"
    | "unset";
  flexWidth?: string | number;
}

export const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }: IFlexProps) => flexDirection || "row"};
  align-items: ${({ alignItems }: IFlexProps) => alignItems || "stretch"};
  justify-content: ${({ justifyContent }: IFlexProps) =>
    justifyContent || "flex-start"};
  gap: ${({ gap }: IFlexProps) =>
    gap ? (typeof gap === "string" ? gap : `${gap}px`) : 0};
  flex-wrap: ${({ wrap }: IFlexProps) => wrap || "nowrap"};
  width: ${({ flexWidth }: IFlexProps) =>
    flexWidth
      ? typeof flexWidth === "string"
        ? flexWidth
        : `${flexWidth}px`
      : "auto"};
`;

export const SubHeader = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: ${({ theme }) => theme.color.secondary};
  padding-bottom: 1.5rem;
`;

export const CardsFlex = styled(Flex)`
  flex-wrap: wrap;
  gap: 1.5rem 3%;
  @media (max-width: 720px) {
    gap: 1.5rem 4%;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const Attribution = styled.footer`
  font-size: 11px;
  text-align: center;
  color: ${({ theme }) => theme.color.secondary};

  a {
    color: ${({ theme }) => theme.color.primary};
  }
`;
