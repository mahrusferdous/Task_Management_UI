import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <Button variant="primary" onClick={() => loginWithRedirect()}>
                Login
            </Button>
        </div>
    );
};
export default LoginButton;
