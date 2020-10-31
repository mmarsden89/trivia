import "./App.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.js";
import PlayArea from "./components/playarea/PlayArea.js";
import Menu from "./components/menu/Menu.js";
import Footer from "./components/footer/Footer.js";
import Cookie from "./components/cookie/Cookie.js";

function App() {
  const [menu, setMenu] = useState(false);
  const [cookie, setCookie] = useState(false);
  const [cookieNum, setCookieNum] = useState(0);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleCookie = () => {
    setCookie(true);
    document.cookie = "score=0";
  };

  useEffect(() => {
    setCookie(false);
    if (document.cookie.length > 0) {
      setCookie(true);
      setCookieNum(parseFloat(document.cookie.split("=")[1]));
    }
  }, [cookie]);

  return (
    <div className="App">
      <header className="App-header">
        <Header toggleMenu={toggleMenu} cookieNum={cookieNum} />
      </header>
      <div className="body-container">
        {menu && <Menu />}
        <PlayArea />
      </div>
      <Footer />
      {!cookie && <Cookie handleCookie={handleCookie} cookie={cookie} />}
    </div>
  );
}

export default App;
