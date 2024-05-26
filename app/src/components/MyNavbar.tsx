import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const MyNavbar = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Welcome</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>

                        <NavLink to="/details" className="nav-link">
                            Details
                        </NavLink>

                        {isAuthenticated ? (
                            <>
                                <Navbar.Collapse className="justify-content-end" style={{ margin: "0 10px" }}>
                                    <Navbar.Text>
                                        Signed in as: <a href="/profile">{user?.name}</a>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                                <LogoutButton />
                            </>
                        ) : (
                            <LoginButton />
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
