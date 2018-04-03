import React, { Component } from 'react';

import styles from './shortenError.css';

class ShortenError extends Component {
    render() {
        return (
            <div className={styles.msgContainer}>
                <div className={styles.msg}>Unable to shorten url. Please enter a valid url.</div>
            </div>
        )
    }
}

export default ShortenError