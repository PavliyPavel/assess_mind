import React from "react";

export interface IProps {
  children: React.ReactNode[];
}

const initContext = {
  isAuth: false,
}

export default React.createContext(initContext);