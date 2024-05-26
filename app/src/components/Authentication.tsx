import { ReactNode } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

interface AuthenticationProps {
    component: ReactNode | any;
}

const Authentication = ({ component }: AuthenticationProps) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <div>Redirecting you to the login page...</div>,
    });

    return <Component />;
};

export default Authentication;
