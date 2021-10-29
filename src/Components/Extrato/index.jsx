import React from "react";
import styled from "styled-components";
import { extratoLista } from "../../info";
import { Items } from "../Items";
import { Box, Button } from "../UI";

export const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, value, date, from }) => (
        <Items key={id} type={type} value={value} date={date} from={from} />
      ))}
      <Button>See more</Button>
    </Box>
  );
};
