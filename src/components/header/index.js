import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

import GitHubLogo from '../../assets/github-logo.png';

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <img src={GitHubLogo} alt="" />
        <div className="search__bar">
          <input
            type="text"
            placeholder="Digite o username para pesquisa..."
            onChange={(event) => setUsernameForSearch(event.target.value)}
          />
          <button type="submit" onClick={submitGetUser}>
            <span>Buscar</span>
          </button>
        </div>
      </S.Wrapper>
    </header>
  );
};

export default Header;
