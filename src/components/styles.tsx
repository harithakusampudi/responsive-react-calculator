import styled from "styled-components";
import { Button, Divider, Col } from "antd";

const CalculatorLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1rem;
`;
const Content = styled.div`
  width: 100%;
  height: 45rem;
  overflow: scroll;
`;

const CalculatorWrapper = styled.div`
  @media (max-width: 600px) {
    width: 18rem;
  }
  width: 100%;
  margin-top: 1rem;
  height: 30rem;
  display: grid;
  grid-template-rows: 15% 1fr;
  padding: 1rem;
  background-color: #141414;
`;
const Key = styled(Button)`
  @media (max-width: 600px) {
    width: ${props => (props?.value === "0" ? "130px" : "55px")};
    min-height: ${props => (props?.value === "0" ? "55px" : "55px")};
  }
  width: ${props => (props?.value === "0" ? "140px" : "55px")};
  min-height: ${props => (props?.value === "0" ? "55px" : "55px")};
  border-color: ${props => props?.color || "#000"};
  background: ${props => props?.color || "#000"};
  :hover {
    background: ${props => props?.color || "#000"};
    border-color: ${props => props?.color || "#000"};
  }
  :focus {
    background: ${props => props?.color || "#000"};
    border-color: ${props => props?.color || "#000"};
  }
  :active {
    border-color: ${props => props?.color || "#000"};
    background: ${props => props?.color || "#000"};
    box-shadow: 0 9px #999;
    transform: translateY(4px);
  }
`;

const Label = styled.span`
  color: ${props => (props.color === "#8c8c8c" ? "#000" : "#fff")};
  font-size: 16px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu;
  margin-left: ${props => (props.key === "0" ? "0px" : "none")};
`;
export const ColWrapper = styled(Col)`
  padding: 8px 0;
`;

const DisplayWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  text-align: right;
  line-height: 1rem;
  overflow: hidden;
`;

const Input = styled.input`
  flex: 1;
  color: #f0f0f0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu;
  font-size: 40px;
  max-width: 100%;
  background-color: inherit !important;
  border: none;
  outline: none;
  text-align: right !important;
`;

const KeyPadWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ScientificKeyWrapper = styled.div`
  margin-right: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const BasicKeyWrapper = styled.div``;

const HistoryWrapper = styled.div`
  padding: 1rem;
`;

const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  height: 6rem;
  @media (max-width: 600px) {
    width: 10rem;
  }
  overflow: scroll;
`;

const TextContnet = styled.span`
  font-weight: 400px;
`;

const HistoryButton = styled.div`
  cursor: pointer;
`;

export default {
  CalculatorLayout,
  Content,
  Wrapper,
  Key,
  Label,
  ColWrapper,
  DisplayWrapper,
  HistoryWrapper,
  KeyPadWrapper,
  ScientificKeyWrapper,
  BasicKeyWrapper,
  HistoryContent,
  Input,
  CalculatorWrapper,
  HistoryButton,
  TextContnet,
  Divider
};
