import Home from "./components/Home";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./components/ProfilePage";
import Authentication from "./components/Authentication";

function App() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
                <Route path="/profile" element={<Authentication component={ProfilePage} />} />
            </Routes>
        </div>
    );
}

export default App;
