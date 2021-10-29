import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`;

export const Item = ({ type, from, value }) => {
  return (
    <Container>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </Container>
  );
};
