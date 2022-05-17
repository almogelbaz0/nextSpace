import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import OrderCard from './View/Order/OrderCard';
import OrderPage from './View/Order/OrderPage'
import './App.css';

function App ()
{
    return (
        <div className="App" >
            <h1> Welcome to React Router! </h1>
            <Routes>
                <Route path="/"
                    element={ <OrderPage /> } />
                <Route path="about"
                    element={ < div /> } />
            </Routes>
        </div>
    );
}

export default App;