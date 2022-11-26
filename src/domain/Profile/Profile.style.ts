import styled from "styled-components";

export const Card = styled.form`
display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 35rem;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  margin: 0 5rem;
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

export const User = styled.div`
display: inline-block;
  justify-content: flex-start;
  align-items: flex-start;
  width: 13rem;
  height: 11rem;
  border-radius: 50%;
  background-size: cover;
  background-color: #fff;
`;

export const Content = styled.div`
background-color: #083180;
  margin: 3rem 3rem;
  display: flex;
  align-items: flex-start;
  width: 70%;
  height: auto;
  padding: 3rem;
  border-radius: 10px;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;