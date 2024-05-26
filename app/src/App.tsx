import Home from "./components/Home";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
