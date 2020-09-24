import React from "react";
import { Row } from "antd";
import Styles from "./styles";

const { ColWrapper, DisplayWrapper, Input } = Styles;

interface DisplayProps {
  inputValue: string;
}
const Display = (props: DisplayProps) => {
  const { inputValue } = props;
  return (
    <DisplayWrapper>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <ColWrapper span={24}>
          <Input type="text" readOnly value={inputValue.toLocaleString()} />
        </ColWrapper>
      </Row>
    </DisplayWrapper>
  );
};

export default Display;
