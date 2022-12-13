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
  width: 50rem;
  height: 15rem;
`;

export const HeadContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 100%;

  padding: 2rem;
`;

export const EditButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 14rem;

  justify-content: center;
  align-items: center;

  p {
    margin-left: 0.5rem;
    font-weight: 500;
  }

  :hover {
    color: #444;
  }
`;
