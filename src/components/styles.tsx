import styled from "styled-components";

const CalculatorLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  color: #40a9ff;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 26rem;
  width: 16rem;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 15% 1fr;
  padding: 1rem;
  background-color: #141414;
`;

export default {
  CalculatorLayout,
  Title,
  Content,
  Wrapper
};
