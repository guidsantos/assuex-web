import styled from "styled-components";

export const Content = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 17rem;
  margin: 0;
`;

export const ImgDiv = styled.div`
  width: 40%;
  height: 100%;
  background: #083180;
  border-radius: 10px 0 0 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoDiv = styled.div`
  width: 40%;
  height: 100%;
  background: #083180;
  color: #fff;

  padding: 1rem;

  border-radius: 0 10px 10px 0;

  a {
    display: block;
    text-decoration: none;
  }
`;

export const CoordNameDiv = styled.div`
  .title {
    font-size: 18px;
  }

  .label {
    font-size: 14px;
    font-weight: 200;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.5rem;
  gap: 0.5rem;
  margin: 1rem 0;

  input {
    width: 100%;
    font-size: 15px;
    border: 1px #aaa solid;
    border-radius: 8px;
  }

  .value {
    font-weight: 200;
  }
`;

export const RoteLinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #eeb113;
  height: 3rem;
  align-items: center;
  justify-content: center;
  color: #fff;

  margin: 1.8rem 0;

  border-radius: 10px;

  p {
    margin-left: 0.5rem;
  }

  :hover {
    background: #eeb140;
  }
`;
