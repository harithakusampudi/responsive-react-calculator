import React, { useState } from "react";
import Display from "./Display";
import KeyPad from "./KeyPad";
import Styles from "./styles";
import * as math from "mathjs";

const { CalculatorLayout, Title, Content, Wrapper } = Styles;

interface CalculatorProps {}

const Calculator = (Props: CalculatorProps) => {
  const [inputExpression, setInputExpression] = useState<string>("0");

  const onKeyPress = (key: string) => {
    if (key === "c") {
      setInputExpression("0");
    } else {
      if (inputExpression === "0") {
        setInputExpression(math.evaluate(inputExpression + key));
      } else {
        setInputExpression(inputExpression + key);
      }
    }
  };

  const onEvaluateExpression = () => {
    setInputExpression(math.evaluate(inputExpression));
  };

  return (
    <CalculatorLayout>
      <Wrapper>
        {/* <Title>Calculator</Title> */}
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
