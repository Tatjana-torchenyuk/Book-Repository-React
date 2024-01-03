import React from "react";

interface IFontSizeContext {
  largerFontSize: boolean,
  setLargerFontSize: (largerFontSize: boolean) => void
}

// context for managing font size
export const FontSizeContext = React.createContext<IFontSizeContext>({largerFontSize: false, setLargerFontSize: () => {}});

// Func to toggle font size based on the largerFontSize preference. 
// The context's initial value is set to false. If largerFontSize is set to true, then
// a larger font size will be applied to components in the app.
export const toggleFontSize = (largerFontSize: boolean) => {
  return {
    fontSize: largerFontSize ? "2rem" : "1rem" ,
  };
}