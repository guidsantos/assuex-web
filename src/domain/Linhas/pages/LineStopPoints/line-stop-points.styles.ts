import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    align-items: center;
    justify-content: center;
    padding: 0 3rem;
`;

export const HeadContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 100%;

  padding: 2rem;
`;

export const ItinerarioContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: space-between;
  justify-content: center;
`;

export const ItinerarioTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: auto;
  margin-right: 5rem;
  padding-bottom: 2rem;

  background: #083180;
`;

export const ItinerarioCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem 0;
  width: 100%;
  height: 5rem;

  color: #fff;

  div{
    .title {
      font-size: 20px;
    }
    .sub-title{
      font-size: 15px;
      font-weight: 300;
    }
  }
`;

export const TableHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  padding: 1rem;
  width: 100%;
  border-bottom: #fff 1px solid;

  color: #fff;

  div {
    display: flex;
    flex-direction: row;
    align-items: space-between;
    flex: 1;
    gap: 0.5rem;
  }
`;
