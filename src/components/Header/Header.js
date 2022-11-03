import React from 'react';
import styles from './Header.module.css';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {close, user} = useTelegram();


    return (
        <div className={styles.Header}>
            <Button onClick={close}>Close</Button>
            <span className={styles.Username}>{user?.username}</span>
        </div>
    );
};

export default Header;
