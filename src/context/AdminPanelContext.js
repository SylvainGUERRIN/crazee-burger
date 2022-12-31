import { createContext } from "react";

export default createContext({
  reduceOrOpen: true,
  setReduceOrOpen: () => {},
  isActive: "add",
  setIsActive: () => {}
});