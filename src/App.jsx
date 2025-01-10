import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import Navbar from "./component/Navbar";
import { createContext, useState } from "react";

export const ThemesContext = createContext();

function App() {
  const [themes, setTheme] = useState("Dark");
  function togglebutton() {
    const updatedTheme = themes == "Dark" ? "Light" : "Dark";
    setTheme(updatedTheme);
  }

  return (
    <>
      <ThemesContext.Provider value={{ themes, setTheme, togglebutton }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/two" element={<PageTwo />} />
            <Route path="/three" element={<PageThree />} />
          </Routes>
        </BrowserRouter>
      </ThemesContext.Provider>
    </>
  );
}

export default App;
