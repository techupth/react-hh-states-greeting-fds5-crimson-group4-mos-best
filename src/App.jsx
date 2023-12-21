// เริ่มด้วยการ set reactstate ก่อน
// ตั้งต้นที่ greeting
// จะเปลี่ยนตอนกดปุ่ม
// เครื่องมือคือ onClick ข้างในจะเป็นฟังชั่น
// ต้องให้ greeting เปลี่ยนได้ ใช้ตัวฟังชั่นไปใส่แทน และเขียนให้เริ่มด้วยGreeting Message
import "./App.css";
import { useState } from "react";
function App() {
  let [greeting, setGreeting] = useState("Greeting Message");
  const handleTHgreeting = () => {
    setGreeting((greeting = "สวัสดี!"));
  };
  const handleENgreeting = () => {
    setGreeting((greeting = "Hi!"));
  };
  const handleCHgreeting = () => {
    setGreeting((greeting = "你好!"));
  };
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={handleTHgreeting}>สวัสดี!</button>
        <button onClick={handleENgreeting}>Hi!</button>
        <button onClick={handleCHgreeting}>你好!</button>
      </div>
    </div>
  );
}

export default App;
