import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-izpxcty7pikoovwl.us.auth0.com";
const clientId = "WtuTLYSWVu9gDUWJJyJ09l3F8eopfYSy";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain={domain}
                clientId={clientId}
                authorizationParams={{
                    redirect_uri: window.location.origin,
                }}
            >
                <App />
            </Auth0Provider>
        </BrowserRouter>
    </React.StrictMode>
);
