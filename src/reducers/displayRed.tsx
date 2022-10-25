type State = {
  markdown: boolean;
  html: boolean;
  browser: boolean;
};

export type Action =
  | { type: "MARKDOWN" }
  | { type: "HTML" }
  | { type: "BROWSER" };

export const INITIAL_STATE = {
  markdown: true,
  html: false,
  browser: false,
};

const displayRed = (state: State, action: Action) => {
  switch (action.type) {
    case "MARKDOWN":
      console.log("Runing mark");
      console.log(state);
      return {
        ...INITIAL_STATE,
      };

    case "HTML":
      console.log("Runing html");
      console.log(state);

      return {
        browser: false,
        markdown: false,
        html: true,
      };

    case "BROWSER":
      console.log("Runing browser");
      console.log(state);

      return {
        markdown: false,
        html: false,
        browser: true,
      };

    default:
      return state;
  }
};

export default displayRed;
