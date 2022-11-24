import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 35rem;
  background-color: #083180;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  h1{
    margin: 1rem 0 3rem;
  }
  p{
    margin: 1rem 0;
    font-size: 30px;
  }
`;

export const Content = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 3rem;
`;