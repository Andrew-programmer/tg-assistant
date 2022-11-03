import React from 'react';
import styles from './Header.module.css';
import Button from "../Button/Button";

const Header = () => {
    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close();
    }

    return (
        <div className={styles.Header}>
            <Button onClick={onClose}>Close</Button>
            <span className={styles.Username}>{tg.initDataUnsafe?.user.username}</span>
        </div>
    );
};

export default Header;
