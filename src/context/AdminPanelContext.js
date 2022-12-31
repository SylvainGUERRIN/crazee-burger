import { createContext } from "react";

export default createContext({
  reduceOrOpen: true,
  setReduceOrOpen: () => {},
  isActiveTab: "add",
  setIsActiveTab: () => {}
});