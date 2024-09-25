import "./App.css";
import Counter from "./Component/Counter";
import { useSelector } from "react-redux";
import ChangeTheme from "./Component/ChangeTheme";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div style={{ background: theme === "light" ? "#FFF" : "#000", minHeight: "100vh" }}>
      <h1 style={{ color: theme === "light" ? "#000" : "#FFF" }}>danu ji</h1>
      <h1>Redux</h1>
      <ChangeTheme />
      <Counter />
    </div>
  );
}

export default App;
