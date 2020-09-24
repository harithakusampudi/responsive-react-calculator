import styled from "styled-components";

const CalculatorLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  padding: 1rem;
  color: #40a9ff;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 80%;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 15% 1fr;
`;

export default {
  CalculatorLayout,
  Title,
  Content,
  Wrapper
};
