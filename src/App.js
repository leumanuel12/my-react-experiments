import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Header from "./components/Header";
import { createContext, useReducer, useState } from "react";
import Posts2 from "./pages/Posts2";
import TodoList from "./pages/TodoList";
import Debounce from "./pages/Debounce";

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
            <Route path="/posts2" element={<Posts2 />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/debounce" element={<Debounce />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
