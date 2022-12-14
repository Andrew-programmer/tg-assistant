import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import {Routes, Route} from "react-router-dom";

import routes from './routes';

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg])


    return (
        <div className="App">
            <Header/>
            <Routes>
                {routes.map(route => {
                    const {path, Component} = route;
                    if(path === '/products'){
                        return <Route index element={<Component/>}/>
                    }
                    return <Route path={path} element={<Component/>}/>
                })}
            </Routes>
        </div>
    );
}

export default App;
