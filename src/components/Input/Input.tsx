import classes from "./Input.module.css";
import { useState } from "react";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<Props> = ({ input, setInput }) => {
  return (
    <section className="section">
      <h2 className="h2">Input</h2>
      <textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        id="editor"
        className={classes.textarea}
      ></textarea>
    </section>
  );
};

export default Input;
