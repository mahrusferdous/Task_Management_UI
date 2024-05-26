import { useAuth0 } from "@auth0/auth0-react";
import MyNavbar from "./MyNavbar";
import { Container } from "react-bootstrap";

const ProfilePage = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    if (!user) {
        return <div>No user Profile Found</div>;
    }

    if (!isAuthenticated) {
        return <div>User not Authenticated</div>;
    }

    getAccessTokenSilently().then((token) => console.log(token));

    return (
        <div>
            <MyNavbar />
            <Container>
                <h1>Profile Page</h1>
                <img src={user?.picture} alt={user?.name} />
                <h2>{user?.name}</h2>
                <ul>
                    {Object.keys(user).map((key, idx) => (
                        <li key={idx}>
                            {key}:{user[key]}
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
};
export default ProfilePage;
