import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #083180;
`;

export const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  margin: 5rem;
  border-radius: 8px;

  width: 30rem;
  height: 20rem;

  input {
    width: 20rem;
    height: 2rem;

    margin: 1rem;
    padding: 1rem;
    border-radius: 6px;
    border: 0;
  }
`;

export const LogoContainer = styled.div`
  margin: 0 0 3rem;
  width: 15rem;
  height: 4rem;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 22rem;
  flex-direction: row;
  margin-top: 1rem;

  align-items: center;
  justify-content: space-between;

  button {
    width: 10rem;
    height: 3rem;
    border-radius: 10px;
    border: 0;
    background-color: #49be25;
    color: #fff;
  }

  button:hover {
    background-color: rgb(73, 180, 37, 0.9);
  }

  a {
    display: block;
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
  }

  a:hover {
    color: #ddd;
  }
`;
