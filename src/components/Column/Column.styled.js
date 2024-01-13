import { styled } from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const MainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  @media (max-width: ${breakpoints.xl}px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;
export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`;
export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  @media (max-width: ${breakpoints.xl}px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;
