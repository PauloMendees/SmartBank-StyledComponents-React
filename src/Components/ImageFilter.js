import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import outros from "../assets/images/outros.svg";
import { Icone } from "./UI";

export const Filter = (type) => {
  const Icones = {
    Restaurante: <Icone src={alimentacao} alt="Alimentação" />,
    Saude: <Icone src={saude} alt="Saúde" />,
    Transporte: <Icone src={transporte} alt="Transporte" />,
    Utilidades: <Icone src={utilidades} alt="Utilidades" />,
    default: <Icone src={outros} alt="Outros" />,
  };

  return Icones[type] || Icones.default;
};
