import "./App.css";
import { useState } from "react";
import { Login, Logout } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  // 전역변수 설정
  const [login, setLogin] = useState(true);
  console.log(login);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setLogin(!login)}>login button</button>
      </header>
      <Routes>
        <Route path="/" element={login === true ? <Login /> : <Logout />} />
      </Routes>
    </div>
  );
}

export default App;
