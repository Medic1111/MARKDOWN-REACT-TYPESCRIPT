import React from "react";
import classes from "./MainWrapper.module.css";

const MainWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};
export default MainWrapper;
