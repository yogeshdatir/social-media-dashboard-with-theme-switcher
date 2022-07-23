import styled from "@emotion/styled";

export const Background = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
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
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  /* identical to box height */

  text-align: center;

  color: #1d1f29;
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
  /* identical to box height */

  color: #63687d;
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IFlexProps {
  direction?: "column" | "row" | "reverse-column" | "reverse-row";
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
  width?: string | number;
}

export const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${({ direction }: IFlexProps) => direction || "row"};
  align-items: ${({ alignItems }: IFlexProps) => alignItems || "stretch"};
  justify-content: ${({ justifyContent }: IFlexProps) =>
    justifyContent || "flex-start"};
  gap: ${({ gap }: IFlexProps) =>
    gap ? (typeof gap === "string" ? gap : `${gap}px`) : 0};
  flex-wrap: ${({ wrap }: IFlexProps) => wrap || "nowrap"};
  width: ${({ width }: IFlexProps) =>
    width ? (typeof width === "string" ? width : `${width}px`) : "auto"};
`;

export const SubHeader = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #63687d;
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
