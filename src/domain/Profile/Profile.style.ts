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

  button {
    width: 20rem;
    height: 3rem;
    margin: 1rem 0 2rem;
    border-radius: 10px;
    border: 0;
    background-color: #49be25;
    color: #fff;
    @media screen and (max-width: 780px) {
      width: 10rem;
      height: 3rem;
      margin: 1rem 0;
    }
  }

  button:hover {
    background-color: rgb(73, 180, 37, 0.9);
  }

  input {
    width: 20rem;
    height: 3rem;
    margin: 1rem 0 2rem;
    padding: 1rem;
    border-radius: 6px;
    border: 0;
    @media screen and (max-width: 780px) {
      width: 10rem;
      height: 3rem;
      margin: 1rem 0;
    }
  }
  p {
    font-size: 30px;
    @media screen and (max-width: 980px) {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 980px) {
    margin: 1rem 0;
    align-items: center;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: transparent;
  transition: all 0.3s ease;
  @include object-center;
  position: relative;
  transition: all 0.3s ease;

  input {
    display: none;
  }

  img {
    position: absolute;
    object-fit: cover;
    width: 165px;
    height: 165px;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
    border-radius: 100px;
    z-index: 0;
  }

  label {
    cursor: pointer;
    height: 165px;
    width: 165px;
  }

  &:hover {
    label {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10000;
      color: rgb(250, 250, 250);
      transition: background-color 0.2s ease-in-out;
      border-radius: 100px;
      margin-bottom: 0;
    }
  }

  span {
    display: inline-flex;
    padding: 0.2em;
    height: 2em;
  }
  @media screen and (max-width: 980px) {
    width: 6rem;
    height: 6rem;
  }
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
  @media screen and (max-width: 780px) {
    flex-direction: column;
    width: 95%;
    padding: 1rem;
    align-items: center;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
