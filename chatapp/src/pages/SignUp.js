import React, { useState } from "react";

import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const SignUp = () => {
    const handleSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .catch(err => {
                console.log(err);
            });
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <h1>Sign Up</h1>
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
                <button type="submit">Sign Up</button>
            </form>
            <Link to="/Login">Login</Link>
        </>
    );
};

export default SignUp;