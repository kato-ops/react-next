import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { AuthProvider } from "./AuthService";
import LoggedInRoute from "./LoggedInRoute";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route element={<LoggedInRoute />}>
                        <Route path="/" element={<Room />} />
                    </Route>
                    {/* デフォルトがアドレス完全一致＋相対アドレスなので/が省略可能 */}
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;