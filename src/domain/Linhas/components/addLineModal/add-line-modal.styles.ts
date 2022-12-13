import styled from "styled-components";

export const Content = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  width: 30rem;
  height: 40rem;
  background: #fff;
  border-radius: 8px;
  z-index: 10;

  .close {
    position: relative;
    top: 0;
    left: 0;
    width: 5rem;
    background: none;
    border: none;
  }
`;

export const FormHead = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: space-between;
`;

export const CreateLineForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  gap: 0.5rem;

  width: 100%;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  input {
    width: 100%;
    height: 2.5rem;
    border-radius: 6px;
    border: 1px #aaa solid;
  }
`;

export const SubmitButton = styled.button`
  width: 20rem;
  height: 3rem;
  background: #49be25;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin: 1rem;
`;
