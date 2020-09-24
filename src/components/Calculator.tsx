import React, { useState } from "react";
import Display from "./Display";
import KeyPad from "./KeyPad";
import Styles from "./styles";
import * as math from "mathjs";

const { CalculatorLayout, Title, Content, Wrapper } = Styles;

interface CalculatorProps {}

const evaluate = (expression: string) => {
  try {
    return math.evaluate(expression).toString();
  } catch (e) {
    console.log(e);
    return "0";
  }
};

const Calculator = (Props: CalculatorProps) => {
  const [inputExpression, setInputExpression] = useState<string>("0");

  const onKeyPress = (key: string) => {
    if (key === "c") {
      setInputExpression("0");
    } else {
      if (inputExpression === "0") {
        setInputExpression(evaluate(inputExpression + key));
      } else {
        setInputExpression(inputExpression + key);
      }
    }
  };

  const onEvaluateExpression = () => {
    setInputExpression(evaluate(inputExpression));
  };

  return (
    <CalculatorLayout>
      <Wrapper>
        <Content>
          <Display inputValue={inputExpression} />
          <KeyPad
            onKeyPress={onKeyPress}
            onEvaluateExpression={onEvaluateExpression}
          />
        </Content>
      </Wrapper>
    </CalculatorLayout>
  );
};

export default Calculator;
