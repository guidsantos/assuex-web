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

  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
`;

export const CardContainer = styled.form`
  width: 50rem;
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

export const SubmitButton = styled.button`
  width: 10rem;
  height: 3rem;
  background: #49be25;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin: 1rem;
`;
