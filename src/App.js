import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
