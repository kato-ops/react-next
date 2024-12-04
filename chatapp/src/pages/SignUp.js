import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";

const SignUp = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!name | !email | !password) {
            window.alert("fill please");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                updateProfile(user, {
                    displayName: name
                });

                window.alert("success");
                navigate("/");
            })
            .catch(err => {
                window.alert("error");
                console.log(err);
            });
    };

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="name"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                    />
                </div>
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
                        placeholder="Password"
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