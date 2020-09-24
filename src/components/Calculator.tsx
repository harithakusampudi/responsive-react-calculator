import React from "react";
import styles from "./styles";
import Display from "./Display";
import KeyPad from "./KeyPad";

const { CalculatorLayout, Title, Content, Wrapper } = styles;

interface CalculatorProps {}

const Calculator = (Props: CalculatorProps) => {
  return (
    <CalculatorLayout>
      <Wrapper>
        <Title>Calculator</Title>
        <Content>
          <Display />
          <KeyPad />
        </Content>
      </Wrapper>
    </CalculatorLayout>
  );
};

export default Calculator;
