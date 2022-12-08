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
  h1{
    margin: 0.5rem 0 5rem;
    font-size: 35px;
  }
  p{
    margin: 1rem 0 1rem;
    font-size: 20px;
  }
  input {
    width: 20rem;
    height: 3rem;
    margin: 1rem 0 2rem;
    padding: 1rem;
    border-radius: 6px;
    border: 0;
  }
  button {
    width: 10rem;
    height: 2.5rem;
    border-radius: 10px;
    border: 0;
    background-color: #028A0F;
    color: #fff;
  }
  button:hover{
    background-color: #03AC13;
    transition: 0.5s;
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

export const Histcard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  min-width: 15rem;
  height: 35rem;
  background-color: #083180;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  margin-left: 5rem;
  h1{
    font-size: 25px;
  }
`;

export const Histrow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 1rem 0;
  background-color: #fff;
  color: #000;
  border-radius: 3px;
  padding: 0.7rem;
`;