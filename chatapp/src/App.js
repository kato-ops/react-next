import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Room />} />
                {/* デフォルトがアドレス完全一致＋相対アドレスなので/が省略可能 */}
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;