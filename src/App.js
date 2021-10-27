import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
