import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 8px 8px 24px;
  margin-bottom: 32px;

  border-bottom: 1px solid #141414;

  img {
    width: 50px;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 500px;
    height: 44px;
    padding: 16px;
    font-weight: 500;
  }

  button {
    background-color: #141414;
    padding: 16px 24px;
    margin: 0 16px;
    border-radius: 8px;

    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
