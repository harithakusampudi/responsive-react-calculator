import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
interface KeyPadProps {}

const KeyPadWrapper = styled.div``;

const Key = styled(Button)`
  width: 100%;
  height: 100%;
  border-color: ${props => props?.color || "#000"};
  background: ${props => props?.color || "#000"};
`;
const LargeKey = styled(Button)`
  width: 100%;
  height: 100%;
  display: flex;
  align-item: center;
  border-color: ${props => props?.color || "#000"};
  background: ${props => props?.color || "#000"};
`;
const Label = styled.span`
  font-size: 16px;
`;
export const ColWrapper = styled(Col)`
  padding: 8px 0;
`;

const Column = (props: any) => {
  return (
    <ColWrapper span={6}>
      <Key shape="circle" type="primary" size="large" color="#595959">
        <Label>{props.keyLabel}</Label>
      </Key>
    </ColWrapper>
  );
};

const RowComponent = (props: any) => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Column keyLabel="8" />
      <Column keyLabel="7" />
      <Column keyLabel="7" />
      <Column keyLabel="7" />
    </Row>
  );
};

const KeyPad = (props: KeyPadProps) => {
  return (
    <KeyPadWrapper>
      <RowComponent />
      <RowComponent />
      <RowComponent />
      <RowComponent />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <ColWrapper span={12}>
          <LargeKey shape="round" type="primary" size="large" color="#595959">
            <Label>0</Label>
          </LargeKey>
        </ColWrapper>
        <Column keyLabel="7" />
        <Column keyLabel="7" />
      </Row>
    </KeyPadWrapper>
  );
};

export default KeyPad;
