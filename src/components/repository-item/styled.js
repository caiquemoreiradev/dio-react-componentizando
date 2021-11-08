import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border-bottom: 1px solid #ccc;
  margin: 16px;
  width: 100%;
  height: 150px;
  align-content: center;

  div.repo__link {
    display: flex;
  }
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 8px 8px 0;
  color: #2d3748;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #3182ce;
`;
