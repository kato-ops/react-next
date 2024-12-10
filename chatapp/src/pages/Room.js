import { React, useEffect, useState, useContext } from "react";
import { signOut } from "firebase/auth";
import { collection, onSnapshot, addDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { AuthContext } from "../AuthService";

import styles from "./Room.module.css"

const Room = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        onSnapshot(collection(db, "messages"), snapshot => {
            const messages = snapshot.docs
                .map(doc => doc.data())
                .toSorted((a, b) => a.date.toDate() - b.date.toDate());
            setMessages(messages);
        });
    }, []);

    const user = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        addDoc(collection(db, "messages"), {
            content: value,
            user: user.displayName,
            date: Timestamp.fromDate(new Date())
        });
        setValue("");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Room</h1>
            <ul className={styles.messageList}>
                {
                    messages.map((massage, index) =>
                        <li key={index}
                            className={styles.messageItem}
                        >
                            {massage.user}:{massage.content}
                        </li>)
                }
            </ul>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className={styles.input}
                />
                <button type="submit" className={styles.submitButton}>送信</button>
            </form>
            <button
                onClick={() => signOut(auth)}
                className={styles.logoutButton}
            >
                Logout
            </button>
        </div>
    );
};

export default Room;