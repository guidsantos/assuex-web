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

  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

export const CardContainer = styled.div`
  width: 40rem;
  height: 15rem;
  margin 4rem;

  align-items: center;
  justify-content: center;
`;

export const HeadContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 100%;

  padding: 2rem;
`;

export const AddLineButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;

  justify-content: center;
  align-items: center;

  button {
    border: none;
    background: none;
    p {
      margin: 1.5rem;
      font-weight: 600;
    }
  }

  button:hover {
    color: #444;
  }
`;
