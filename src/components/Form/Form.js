import React, {useCallback, useEffect, useState} from 'react';
import styles from './Form.module.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [subject, setSubject] = useState('physical');

    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send'
        })
    }, [tg])

    const sendData = useCallback(() => {
        const data = {
            country,
            address,
            subject
        }

        console.log(data);

        tg.sendData(JSON.stringify(data));
    }, [country, address, subject, tg])

    useEffect(() => {

        tg.onEvent('mainButtonClicked', sendData);
        return () => {
            tg.offEvent('mainButtonClicked', sendData);
        }

    })

    useEffect(() => {
        if(!country || !address){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, address, tg.MainButton])

    return (
        <from className={styles.Form}>
            <h3>Fill your info</h3>
            <input
                className={styles.input}
                type="text"
                placeholder={'Country'}
                value={country}
                onChange={event => setCountry(event.target.value)}
            />
            <input
                className={styles.input}
                type="text"
                placeholder={'Address'}
                value={address}
                onChange={event => setAddress(event.target.value)}
            />
            <select defaultValue={subject} onChange={event => setSubject(event.target.value)} className={styles.input}>
                <option value={'physical'}>Personal</option>
                <option value={'legal'}>Business</option>
            </select>
        </from>
    );
};

export default Form;
