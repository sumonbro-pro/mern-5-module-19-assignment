import React from 'react';
import CreatePage from './pages/CreatePage';
import FoodsPage from "./pages/FoodsPage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";
import {HashRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<FoodsPage/>} />
                    <Route path="/create-food" element={<CreatePage/>} />
                    <Route path="/update-food/:id" element={<UpdatePage/>} />
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;