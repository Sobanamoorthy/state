import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import ThemeToggle from "./ThemeToggle";
import Timer from "./Timer";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Counter</Link> |{" "}
        <Link to="/theme">Theme</Link> |{" "}
        <Link to="/timer">Timer</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/theme" element={<ThemeToggle />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
