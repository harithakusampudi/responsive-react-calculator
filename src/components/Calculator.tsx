import React, { useState } from "react";
import Display from "./Display";
import KeyPad from "./KeyPad";
import Styles from "./styles";
import * as math from "mathjs";
import { isOperator } from "../utils";
import History from "./History";
import moment from "moment";
import { CalculationProps } from "../modules/calculations/calculations.duck";
const { CalculatorLayout, Content, Wrapper, CalculatorWrapper } = Styles;

interface CalculatorProps {
  calculations: {
    todayList: CalculationProps[];
    yesterdayList: CalculationProps[];
  };
  actions: {
    saveCalculation: (payload: CalculationProps) => void;
  };
}

const evaluate = (expression: string) => {
  try {
    return math.evaluate(expression).toString();
  } catch (e) {
    console.log(e);
    return "0";
  }
};

const Calculator = (props: CalculatorProps) => {
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
    const evaluatedExpression = evaluate(inputExpression);
    if (evaluatedExpression !== "0") {
      let payload = {
        date: moment(),
        result: evaluatedExpression,
        input: inputExpression
      };
      props.actions.saveCalculation(payload);
    }
    setInputExpression(evaluatedExpression);
  };

  return (
    <CalculatorLayout>
      <Wrapper>
        <Content>
          <CalculatorWrapper>
            <Display inputValue={inputExpression} />
            <KeyPad
              inputExpression={inputExpression}
              onKeyPress={onKeyPress}
              onEvaluateExpression={onEvaluateExpression}
            />
          </CalculatorWrapper>
          <History calculations={props.calculations} />
        </Content>
      </Wrapper>
    </CalculatorLayout>
  );
};

export default Calculator;
