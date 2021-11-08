import React from "react";
import * as S from "./styled";

import WithoutSearch from '../../assets/no-users.svg';

const NoSearch = () => {
  return (
    <S.Wrapper>
      <img src={WithoutSearch} alt="No user find" />

      <h1>Nenhum usuário pesquisado</h1>

      <h4>Tente pesquisar um usuário na barra de pesquisa</h4>
    </S.Wrapper>
  );
};

export default NoSearch;
