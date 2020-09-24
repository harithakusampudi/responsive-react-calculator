import React, { useState } from "react";
import Display from "./Display";
import KeyPad from "./KeyPad";
import Styles from "./styles";
import * as math from "mathjs";
import { isOperator } from "../utils";

const { CalculatorLayout, Content, Wrapper } = Styles;

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
    if (key === "ac") {
      setInputExpression("0");
    } else {
      if (inputExpression === "0") {
        setInputExpression(evaluate(inputExpression + key));
      } else {
        const lastChar = inputExpression.split("").pop();
        const bothAreOperators = isOperator(lastChar) && isOperator(key);
        if (bothAreOperators) {
          setInputExpression(inputExpression.slice(0, -1) + key);
        } else {
          setInputExpression(inputExpression + key);
        }
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
            inputExpression={inputExpression}
            onKeyPress={onKeyPress}
            onEvaluateExpression={onEvaluateExpression}
          />
        </Content>
      </Wrapper>
    </CalculatorLayout>
  );
};

export default Calculator;
