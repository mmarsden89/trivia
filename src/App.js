import "./App.scss";
import React, { useState } from "react";
import Header from "./components/header/Header.js";
import PlayArea from "./components/playarea/PlayArea.js";
import Menu from "./components/menu/Menu.js";
import Footer from "./components/footer/Footer.js";

function App() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Header toggleMenu={toggleMenu} />
      </header>
      <div className="body-container">
        {menu && <Menu />}
        <PlayArea />
      </div>
      <Footer />
    </div>
  );
}

export default App;
