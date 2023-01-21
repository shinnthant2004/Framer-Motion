import "./App.css";
import Motion from "./components/motion.component";

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
        <Motion />
      </div>
    </div>
  );
}

export default App;
