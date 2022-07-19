import styled from "@emotion/styled";

export const Background = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1110px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 2.25rem 0 4.75rem 0;
  display: flex;
  flex-direction: column;
  flex-gap: 4rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    /* identical to box height */

    text-align: center;

    color: #1d1f29;
    padding-bottom: 3px;
  }

  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #63687d;
  }
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flex = styled.div`
  display: flex;
`;
