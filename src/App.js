import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Header from "./components/Header";
import { createContext, useReducer, useState } from "react";

export const ThemeContext = createContext();

const initMode = localStorage?.theme ? localStorage.theme : 'light';
const reducer = (state, action) => {
  switch(action){
    case 'on':
      return state='dark'
    case 'off':
      return state='light'
  }
}

function App() {
  const [mode, dispatch] = useReducer(reducer, initMode);

  return (
    <ThemeContext.Provider value={{themeMode: mode, themeDispatch: dispatch}}>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Posts />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
