import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    width: 100%
    align-items: center;
    justify-content: center;
`;

export const CardGrid = styled.div`
  display: grid;
  width: 100%;
  padding: 3rem;

  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;

export const CardContainer = styled.div`
  width: 40rem;
  height: 15rem;
`;
