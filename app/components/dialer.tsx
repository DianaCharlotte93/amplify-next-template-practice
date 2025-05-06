import React, {useState} from 'react';
import styles from './dialer.module.scss';

const Dialer: React.FC = () => {
    const [number, setNumber] = useState('');

    const handlePress = (value: string) => {
        setNumber((prev) => (prev + value).slice(0, 15));
    };

    const handleDelete = () => {
        setNumber((prev) => prev.slice(0, -1));
    };

    const handleCall = () => {
        alert(`Calling ${number}...`);
    };

    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

    return (
        <div className={styles.container}>
            <div className={styles.display}>{number || 'Enter number'}</div>
            <div className={styles.keypad}>
                {keys.map((key) => (
                    <button key={key} onClick={() => handlePress(key)}>{key}</button>
                ))}
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleCall} className={styles.callButton}>Call</button>
            </div>
        </div>
    )
}
export default Dialer;