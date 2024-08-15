import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import WelcomComp from "./components/WelcomComp/WelcomComp";
import ValuesComp from "./components/ValuesComp/ValuesComp";
import BenefitsComp from "./components/BenefitsComp/BenefitsComp";
import JobComp from "./components/JobComp/JobComp";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center px-8 lg:px-0">
      <div className=" container max-w-screen-lg">
        <Header />
        <WelcomComp />
        <ValuesComp />
        <BenefitsComp />
        <JobComp />
      </div>
    </div>
  );
}

export default App;
