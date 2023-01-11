import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
import React from "react";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <Footer></Footer>
      <Search />
    </div>
  );
}

export default App;
