import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";

import AppContext from "./utils/context";
import VideoSection from "./components/Reels/VideoSection";
import Reels from "./components/Reels/Reels";
// import Reels from "./components/Reels/Reels";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/pradarshan" element={<Home />} />
                    <Route path="/pradarshan/category/:id" element={<Category />} />
                    <Route path="/pradarshan/product/:id" element={<SingleProduct />} />
                    <Route path="/pradarshan/reel" element={<Reels />} />
                </Routes>
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
