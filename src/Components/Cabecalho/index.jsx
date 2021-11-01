import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimariaClara } from "../UI/variables";

//Criando os links estilizados com StyledComponents
const BtnContent = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background: ${({ theme }) => theme.boxContent};
  color: ${({ theme }) => theme.primary};
`;

const BtnLined = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.boxContent};
`;

//Criando um nav estilizado com o StyledComponents
const StyledHeader = styled.nav`
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

//Criando uma img estilizada com o StyledComponents
const ImagemLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <ImagemLogo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnLined href="https://google.com">Ajuda</BtnLined>
        <BtnContent href="https://google.com">Sair</BtnContent>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
