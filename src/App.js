import "./App.scss";
import Header from "./components/header/Header.js";
import PlayArea from "./components/playarea/PlayArea.js";
import Menu from "./components/menu/Menu.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {/* <PlayArea /> */}
      <Menu />
    </div>
  );
}

export default App;
