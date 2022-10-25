import classes from "./Header.module.css";
import { Action } from "../../reducers/displayRed";

const Header: React.FC<{ dispatch: React.Dispatch<Action> }> = ({
  dispatch,
}) => {
  // const [state, dispatch] = useReducer(displayRed, INITIAL_STATE);

  return (
    <header className={classes.header}>
      <h1
        onClick={() => {
          console.log("MARKDOWN");
          return dispatch({ type: "MARKDOWN" });
        }}
        className={classes.h1}
      >
        MARKDOWN
      </h1>
      <nav className={classes.nav}>
        <li
          onClick={() => {
            console.log("HTML");

            return dispatch({ type: "HTML" });
          }}
          className={classes.li}
        >
          HTML
        </li>
        <li
          onClick={() => {
            console.log("BROWSER");

            return dispatch({ type: "BROWSER" });
          }}
          className={classes.li}
        >
          Browser
        </li>
      </nav>
    </header>
  );
};

export default Header;
