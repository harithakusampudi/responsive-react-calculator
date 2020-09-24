import React from "react";
import styled from "styled-components";
import { Input } from "antd";

const DisplayWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  background-color: #262626;
  text-align: right;
  padding: 0px 0.5rem;
  line-height: 1rem;
  overflow: scroll;
`;

const InputData = styled.input`
  flex: 1;
  color: #f0f0f0;
  font-family: San Francisco;
  font-size: 40px;
  max-width: 100%;
  background-color: inherit !important;
  border: none;
  outline: none;
  text-align: right !important;
`;

interface DisplayProps {}
const Display = (props: DisplayProps) => {
  const number = 1234;
  return (
    <DisplayWrapper>
      <InputData type="text" readOnly value={number.toLocaleString()} />
    </DisplayWrapper>
  );
};

export default Display;
