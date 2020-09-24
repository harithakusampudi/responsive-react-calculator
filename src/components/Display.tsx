import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { ColWrapper } from "./KeyPad";

const DisplayWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  text-align: right;
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
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <ColWrapper span={24}>
          <InputData type="text" readOnly value={number.toLocaleString()} />
        </ColWrapper>
      </Row>
    </DisplayWrapper>
  );
};

export default Display;
