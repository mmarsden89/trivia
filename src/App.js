import "./App.scss";
import Header from "./components/header/Header.js";
import PlayArea from "./components/playarea/PlayArea.js";
import Menu from "./components/menu/Menu.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="body-container">
        <Menu />
        <PlayArea />
      </div>
      <Footer />
    </div>
  );
}

export default App;
