import React, { useState } from "react";

import { Link } from "react-router-dom";

const Login = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {/* aタグだとリロードが走る */}
            <Link to="/SignUp">Sign Up</Link>
        </>
    );
};

export default Login;