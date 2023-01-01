import { createContext } from "react";

export default createContext({
  reduce: false,
  setReduce: () => {},
  isActive: "add",
  setIsActive: () => {}
});