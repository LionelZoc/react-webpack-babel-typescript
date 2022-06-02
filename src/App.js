import React from "react";
import Test from "appComponents/mine";
import { again } from "./components/other";
function App() {
  return (
    <div>
      <Test value={3} />
      <h2>Welcome to amir Muerte</h2>
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  );
}

export default App;
