import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import outros from "../assets/images/outros.svg";
import { Icone, IconeTema } from "./UI";

export const Filter = (type) => {
  const Icones = {
    Restaurante: <IconeTema src={alimentacao} alt="Alimentação" />,
    Saude: <IconeTema src={saude} alt="Saúde" />,
    Transporte: <IconeTema src={transporte} alt="Transporte" />,
    Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
    default: <IconeTema src={outros} alt="Outros" />,
  };

  return Icones[type] || Icones.default;
};
