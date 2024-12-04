import React, { useContext, useState } from "react";

import { Link, useNavigate, Navigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { AuthContext } from "../AuthService";

const Login = ({ history }) => {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(data => {
                navigate("/");
                //どっちでもいい？
                //history.push("/");
            })
            .catch(err => {
                window.alert("error");
                console.log(err);
            });
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useContext(AuthContext);
    if (user) {
        return <Navigate replace to="/" />
    }
    else {
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
    }
};

export default Login;