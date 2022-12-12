import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem;
  width: 100%;

  gap: 6rem;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem;
  width: 40rem;
  height: 75vh;
  background: #083180;
  border-radius: 10px;
  .title {
    font-size: 30px;
    color: #fff;
  }

  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  border: #fff 3px solid;
  color: #fff;
  padding: 2rem;
  margin: 1rem 0;

  border-radius: 10px;
`;

export const NotificaitonText = styled.div`
  margin: 0 1rem;
`;

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  gap: 2rem;

  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const NavCard = styled.div`
  display: flex;
  width: 100%;
  background: #083180;
  color: #fff;
  align-items: center;
  justify-content: flex-start;

  padding: 1rem;

  border-radius: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 2rem;

  .title {
    font-size: 30px;
    font-weight: 600;
  }

  .sub-title {
    font-size: 18px;
    font-weight: 100;
  }
`;
