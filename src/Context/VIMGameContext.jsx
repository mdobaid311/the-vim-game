import { createContext, useContext } from "react";

const VIMGameContext = createContext();

export const useVIMGameContext = () => {
  return useContext(VIMGameContext);
};
