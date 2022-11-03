import './App.css';
import {useEffect} from "react";
import Button from "./components/button/Button";

const tg = window.Telegram.WebApp;


function App() {
    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close();
    }

    return (
        <div className="App">
            <Button onClick={onClose}>Close</Button>
        </div>
    );
}

export default App;
