import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import WelcomComp from "./components/WelcomComp/WelcomComp";
import ValuesComp from "./components/ValuesComp/ValuesComp";
import BenefitsComp from "./components/BenefitsComp/BenefitsComp";
import JobComp from "./components/JobComp/JobComp";
import FerquentlyComp from "./components/FerquentlyComp/FerquentlyComp";
import StartComp from "./components/StartComp/StartComp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center  lg:px-0">
      <div>
        <div className="container pt-8 px-4 md:px-16 max-w-screen-lg ">
          <Header />
          <WelcomComp />
          <ValuesComp />
          <BenefitsComp />
          <JobComp />
          <FerquentlyComp />
          <StartComp />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
