import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("White");

  return (
    <div className="min-h-screen" style={{ backgroundColor: bgColor }}>

        <button
          onClick={() => setBgColor("yellow")}>Yellow
        </button>
        <button
          onClick={() => setBgColor("blue")}> Blue
        </button>

        <button onClick={() => setBgColor("Black")}>
          Reset
        </button>
      </div>
  );
}

export default App;