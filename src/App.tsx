import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import "./_App.css";
import {StartView} from "./views/StartView/StartView";
import {GameView} from "./views/GameView/GameView";
import {ErrorView} from "./views/errors/ErrorView/ErrorView";
import {WinView} from "./views/WinView/WinView";

export const App = () => {
    return (
        <div className="App">
            <div className={"App_sites"}>
                <Routes>
                    <Route path={"/error/:description"} element={<ErrorView />} />
                    <Route path="/win/:turns" element={<WinView />} />
                    <Route path="/game/:amount" element={<GameView />} />
                    <Route path="/game" element={<Navigate to={"/error/wrong-path"} />} />
                    <Route path="/start" element={<StartView />} />
                    <Route path="/" element={<Navigate to={"/start"}/>} />
                    <Route path="*" element={<Navigate to={"/error/wrong-path"} />} />
                </Routes>
            </div>
        </div>
    );
};