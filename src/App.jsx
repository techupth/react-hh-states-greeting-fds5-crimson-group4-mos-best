import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setgreetingMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setgreetingMessage("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setgreetingMessage("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setgreetingMessage("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
