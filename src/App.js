import './App.css';
import {useEffect} from "react";
import Button from "./components/Button/Button";

const tg = window.Telegram.WebApp;


function App() {
    useEffect(() => {
        tg.ready();
    }, [])


    return (
        <div className="App">
        </div>
    );
}

export default App;
