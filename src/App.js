import React, { useState } from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas.js";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import SwitcherTema from "./Components/SwitcherTema/SwitcherTema.jsx";
import { BtnTema } from "./Components/UI";

function App() {
  const [tema, setTema] = useState(true);

  function toggleTema() {
    setTema((tema) => !tema);
  }
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
