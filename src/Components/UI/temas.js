import {
  fundoClaro,
  conteudoClaro,
  textoFundoClaro,
  corPrimariaClara,
} from "./variables";
import {
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscuro,
  corPrimariaEscura,
} from "./variables";

export const temaClaro = {
  body: fundoClaro,
  boxContent: conteudoClaro,
  text: textoFundoClaro,
  primary: corPrimariaClara,
  filter: "",
};

export const temaEscuro = {
  body: fundoEscuro,
  boxContent: conteudoEscuro,
  text: textoFundoEscuro,
  primary: corPrimariaEscura,
  filter: "invert(100%)",
};
