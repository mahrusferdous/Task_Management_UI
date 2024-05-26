import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <div>
            <Button variant="danger" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Logout
            </Button>
        </div>
    );
};
export default LogoutButton;
