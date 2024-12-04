//Routeコンポーネントの内、ログイン中のみアクセスできるようなコンポーネントを作成
import { React, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthService";

const LoggedInRoute = () => {
    //useContext(対象のコンテキストオブジェクト)でproviderのvalueを参照できる
    const user = useContext(AuthContext);

    //Outletは配置したRouteコンポーネントのコンポーネントに置き換えられる
    return (user ? <Outlet /> : <Navigate replace to="/login" />);
}

export default LoggedInRoute;