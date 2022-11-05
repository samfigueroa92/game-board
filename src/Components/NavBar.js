import { Link } from "react-router-dom";
import BlackJack from "./BlackJack";
import TicTacToe from "./TicTacToe";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/blackjack">Black Jack</Link>
            <Link to="/tictactoe">Tic Tac Toe</Link>
        </div>
    )
};

export default NavBar;