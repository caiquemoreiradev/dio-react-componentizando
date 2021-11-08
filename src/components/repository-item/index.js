import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <div className="repo__link">
        <S.WrapperFullName>full name:</S.WrapperFullName>
        <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
          {fullName}
        </S.WrapperLink>
      </div>
    </S.Wrapper>
  );
};

export default RepositoryItem;
