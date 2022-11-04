import React from 'react';
import styles from './Header.module.css';
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user} = useTelegram();


    return (
        <div className={styles.Header}>
            {
                user?.username === undefined ? null :
                    <span className={styles.Username}>Hello, {user?.username}</span>
            }
        </div>
    );
};

export default Header;
