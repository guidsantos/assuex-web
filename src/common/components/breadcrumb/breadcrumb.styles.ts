import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  width: 100%;

  div:last-child a {
    color: #083180;
  }
`;

export const LinkText = styled.div`
  display: flex;

  p {
    font-size: 25px;
    color: #aaa;
  }

  a {
    font-size: 25px;
    color: #aaa;
    text-decoration: none;
    margin: 0 1rem;
  }

  a:hover {
    color: #083180;
  }
`;
