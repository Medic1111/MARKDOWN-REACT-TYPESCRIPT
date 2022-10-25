import React, { useState, useReducer } from "react";
import { marked } from "marked";
import Header from "./components/Header/Header";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import Input from "./components/Input/Input";
import displayRed, { INITIAL_STATE } from "./reducers/displayRed";
import Browser from "./components/Browser/Browser";
import Html from "./components/Html/Html";

function App() {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(displayRed, INITIAL_STATE);

  return (
    <>
      <Header dispatch={dispatch} />
      <MainWrapper>
        {state.markdown && <Input input={input} setInput={setInput} />}
        {state.browser && <Browser input={marked(input)} />}
        {state.html && <Html input={marked(input)} />}
      </MainWrapper>
    </>
  );
}

export default App;
