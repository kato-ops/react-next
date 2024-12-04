import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

const AuthContext = React.createContext();

//provider = コンテキスト(複数が共通で使う値)で渡したい値を指定する
//childrenは自動で子要素が入ってくる変数
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //onAuthStateChangedはこの関数外の物を変化させる(副作用がある)のでuseEffectでラップする
    //今回は外部APIとの通信なので、レンダリング処理とは関係なく、最中に必要としないため分離する
    //この中の処理はコンポーネントの描写後に実行される
    useEffect(() => {
        //ログイン、ログアウト時に発生するコールバック関数を設定
        onAuthStateChanged(auth, setUser);
        //第二引数を入れないとレンダリング毎に実行されるので注意
    }, []);
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };