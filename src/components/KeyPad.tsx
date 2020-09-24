import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { getColorForKey } from "../utils";
import { jsonForKeyPad } from "../constants";
interface KeyPadProps {}
interface RowComponentPorps {
  keys: string[];
}

interface ColumnProps {
  shape: string;
  color: string;
  label: string;
  span: number;
}

const Key = styled(Button)`
  width: 100%;
  height: 100%;
  border-color: ${props => props?.color || "#000"};
  background: ${props => props?.color || "#000"};
`;

const Label = styled.span`
  color: ${props => (props.color === "#8c8c8c" ? "#000" : "#fff")};
  font-size: 16px;
`;
export const ColWrapper = styled(Col)`
  padding: 8px 0;
`;

const Column = (props: ColumnProps) => {
  const { shape, color, label, span } = props;
  return (
    <ColWrapper span={span}>
      <Key
        shape={shape === "circle" ? "circle" : "round"}
        size="large"
        color={color}
      >
        <Label color={color}>{label}</Label>
      </Key>
    </ColWrapper>
  );
};

const RowComponent = (props: RowComponentPorps) => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {props.keys.map((eachKey: string) => {
        let properties = {
          shape: eachKey === "0" ? "round" : "circle",
          color: getColorForKey(eachKey),
          label: eachKey,
          span: 6
        };

        if (eachKey === "0") {
          properties.span = 12;
        }
        return <Column {...properties} />;
      })}
    </Row>
  );
};

const KeyPad = (props: KeyPadProps) => {
  return (
    <div>
      {Object.values(jsonForKeyPad.basic).map((value: string[]) => {
        return <RowComponent keys={value} />;
      })}
    </div>
  );
};

export default KeyPad;
