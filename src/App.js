import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { SocketProvider } from "./providers/Socket";

function App() {
  return (
    <div className="App">
      <SocketProvider>
        <Routes>
          <Route path="/" element={"Hello RTC"} />
          <Route path="home" element={<Home />} />
        </Routes>
      </SocketProvider>
    </div>
  );
}

export default App;
