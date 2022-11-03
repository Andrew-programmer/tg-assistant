import React from 'react';
import styles from './Button.module.css';

const Button = ({children, ...props}) => {
    return (
        <button {...props} style={styles.Button}>
            {children}
        </button>
    );
};

export default Button;
