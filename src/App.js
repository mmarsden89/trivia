import "./App.scss";
import Header from "./components/header/Header.js";
import PlayArea from "./components/playarea/PlayArea.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <PlayArea />
    </div>
  );
}

export default App;
