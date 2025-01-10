// import { Children, createContext, useState } from "react";

// const ThemeContext = createContext();
// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");
//   const togglebutton = () => {
//     const updatedTheme = theme == "light" ? "dark" : "light";
//     setTheme(updatedTheme);
//   };
//   const values = { theme, setTheme, togglebutton };
//   return (
//     <ThemeContext.Provider value={values}>{Children}</ThemeContext.Provider>
//   );
// };
// export { ThemeProvider, ThemeContext };
