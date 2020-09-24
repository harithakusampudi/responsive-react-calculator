import React from "react";
import { Row } from "antd";
import { getColorForKey } from "../utils";
import { jsonForKeyPad, KEY_PAD_TYPES } from "../constants";
import Styles from "./styles";

const {
  ColWrapper,
  KeyPadWrapper,
  ScientificKeyWrapper,
  BasicKeyWrapper,
  Key,
  Label
} = Styles;
interface KeyPadProps {
  onKeyPress: (label: string) => void;
  onEvaluateExpression?: () => void;
}
interface RowComponentPorps extends KeyPadProps {
  rowKeys: KeyValueProps[];
  span: number;
  type: string;
}

interface KeyValueProps {
  [key: string]: string;
}
interface ColumnProps extends KeyPadProps {
  color: string;
  label: string;
  value: string;
  span: number;
}

const Column = (props: ColumnProps) => {
  const { color, label, value, span, onKeyPress, onEvaluateExpression } = props;
  const onClick = () => {
    if (value === "=") {
      onEvaluateExpression && onEvaluateExpression();
    } else {
      onKeyPress(value);
    }
  };

  const shape = value === "0" ? "round" : "circle";
  return (
    <ColWrapper span={span}>
      <Key
        shape={shape}
        size="large"
        value={value}
        type="text"
        color={color}
        onClick={() => onClick()}
      >
        <Label color={color} key={value}>
          {label}
        </Label>
      </Key>
    </ColWrapper>
  );
};

const RowComponent = (props: RowComponentPorps) => {
  const { type, span, onKeyPress, onEvaluateExpression } = props;
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {props.rowKeys.map((eachKey: KeyValueProps) => {
        const keyValue = Object.keys(eachKey)[0];
        const keyLabel = Object.values(eachKey)[0];

        let properties = {
          color:
            type === KEY_PAD_TYPES.BASIC ? getColorForKey(keyValue) : "#595959",
          label: keyLabel,
          value: keyValue,
          span: span,
          onKeyPress: onKeyPress,
          onEvaluateExpression: onEvaluateExpression
        };

        if (keyValue === "0") {
          properties.span = 12;
        }
        return <Column {...properties} />;
      })}
    </Row>
  );
};

const KeyPad = (props: KeyPadProps) => {
  const { onEvaluateExpression, onKeyPress } = props;
  const onScientificKeyPres = () => {
    // Do Nothing
  };
  return (
    <KeyPadWrapper>
      <ScientificKeyWrapper>
        {jsonForKeyPad.scientific.map((eachRow: any[]) => {
          return (
            <RowComponent
              rowKeys={eachRow}
              span={4}
              type={KEY_PAD_TYPES.SCIENTIFIC}
              onKeyPress={onScientificKeyPres}
              onEvaluateExpression={onScientificKeyPres}
            />
          );
        })}
      </ScientificKeyWrapper>
      <BasicKeyWrapper>
        {jsonForKeyPad.basic.map((eachRow: any[]) => {
          return (
            <RowComponent
              rowKeys={eachRow}
              span={6}
              type={KEY_PAD_TYPES.BASIC}
              onKeyPress={onKeyPress}
              onEvaluateExpression={onEvaluateExpression}
            />
          );
        })}
      </BasicKeyWrapper>
    </KeyPadWrapper>
  );
};

export default KeyPad;
