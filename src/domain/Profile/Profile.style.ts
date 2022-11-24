import styled from "styled-components";

export const Card = styled.form`
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

  input {
    width: 20rem;
    height: 3rem;
    margin: 1rem 0 2rem;
    padding: 1rem;
    border-radius: 6px;
    border: 0;
  }
  p{
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