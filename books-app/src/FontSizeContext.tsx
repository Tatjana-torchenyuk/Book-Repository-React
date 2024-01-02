import React from "react";

interface IFontSizeContext {
  largerFontSize: boolean,
  setLargerFontSize: (largerFontSize: boolean) => void
}

export const FontSizeContext = React.createContext<IFontSizeContext>({largerFontSize: false, setLargerFontSize: (largerFontSize: boolean) => {}});

export const toggleFontSize = (largerFontSize: boolean) => {
  return {
    fontSize: largerFontSize ? "2rem" : "1rem" ,
  };
}