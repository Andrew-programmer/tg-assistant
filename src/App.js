import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import Button from "./components/Button/Button";


function App() {
    const {tg, toggleMainButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])


    return (
        <div className="App">
            <Header/>
            <Button onClick={toggleMainButton}>Toggle</Button>
        </div>
    );
}

export default App;
