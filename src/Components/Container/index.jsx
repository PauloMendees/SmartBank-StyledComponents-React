import React from "react";
import styled from "styled-components";
import Titulo from "../Titulo";
import Conta from "../Conta";
import { extratoLista } from "../../info";
import { Extrato } from "../Extrato";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
      flex-direction: column;
    }
  }
`;

const Container = () => {
  return (
    <ContainerDiv>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </ContainerDiv>
  );
};

export default Container;
