import "./App.css";
import Framer from "./components/frame.component";

function App() {
  return (
    <div className="App">
      <h2>Test</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Framer />
      </div>
    </div>
  );
}

export default App;
