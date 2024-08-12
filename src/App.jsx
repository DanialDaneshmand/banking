import "./App.css";
import React from "react";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center px-8 lg:px-0">
      <div className=" container max-w-screen-lg">
        <Header />
      </div>
    </div>
  );
}

export default App;
