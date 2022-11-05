import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import BlackJack from "./Components/BlackJack";
import TicTacToe from "./Components/TicTacToe";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blackjack" element={<BlackJack/>}/>
          <Route path="/tictactoe" element={<TicTacToe/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
