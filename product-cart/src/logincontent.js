import { createContext, useContext, useState } from "react";

// Create Context
const LoginContext = createContext();

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <Login />
        </LoginContext.Provider>
    );
}

function Login() {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

    return (
        <div>
            <h1>
                {isLoggedIn ? "Welcome, Parth!" : "Please Login"}
            </h1>

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
}


export default App;