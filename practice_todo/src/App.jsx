import { useState } from "react";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import Todos from "./todos";
import styled, { keyframes } from "styled-components";

let Box = styled.div`
  margin: 50px;
`;

let inputAnimation = keyframes`
  50% {
  border-top-color: rgb(96, 218, 170);
  border-right-color: rgb(96, 218, 170);
  -webkit-transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
  transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
  }
  99% {
  border-bottom-color: rgb(96, 218, 170);
  border-left-color: rgb(96, 218, 170);
  -webkit-transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
  transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
  }
  100%{
    border-color:rgb(96, 218, 170);
  }
`;

let Button = styled.button`
  color: black;
  background-color: ${(props) => props.bgColor};
  border: solid 3px;
  border-bottom-width: 5px;
  border-color: #2c303da8;
  border-radius: 20px;
  padding: ${(props) => props.btn_size};
  font-size: 40px;
  font-weight: bolder;
  :active {
    box-shadow: 1px 1px 0 #2c303da8;
    border: 1px solid;
  }
  :hover {
    border-bottom-width: 10px;
    box-shadow: 0px 2px 30px rgb(0, 0, 0, 0.8);
    background-color: ${(props) => props.hoverBgColor};
    transition: all 0.2s linear;
    transform: scale(1.2);
  }
`;

let Input = styled.input`
  font-size: 20px;
  width: 400px;
  height: 60px;
  border: ${(props) => props.inputBorder} solid;
  transition: all 0.2s;
  outline: none;
  :hover {
    transform: scale(1.05);
    animation: ${inputAnimation} 2s forwards;
  }
`;

const DateInput = styled(Input)`
  border-top: none;
  border-right: none;
  border-left: none;
`;

const App = () => {
  const [todos, setTodos] = useState(Todos);

  return (
    <Template>
      <TodoList todos={todos} />
      <Box>
        <Button type="button" bgColor="rgb(93, 176, 198, 0.645)" hoverBgColor="rgb(252, 219, 161)" btn_size="40px 40px">
          버튼1
        </Button>
      </Box>
      <Box>
        <Input type="datetime-local" inputBorder="8px" />
        <Box />
        <DateInput type="text" inputBorder="18px" />
        <Button type="button" bgColor="rgb(93, 136, 398, 0.645)" hoverBgColor="rgb(173, 140, 209)" btn_size="20px 40px">
          버튼2
          {() => {
            alert("asdf");
          }}
        </Button>
      </Box>
      <p>개</p>
    </Template>
  );
};

export default App;
