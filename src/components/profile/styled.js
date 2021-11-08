import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  height: 200px;

  div#user__info__main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: #141414;
    font-weight: bold;

    transition: all 0.2s;

    &::hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px 0 32px;
`;
