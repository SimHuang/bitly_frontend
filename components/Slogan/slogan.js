import React, { Component } from 'react';

import styles from './slogan.css';

class Slogan extends Component {
    render() {
        return (
            <div className={styles.slogan}>
                <h1>SHORTEN. SHARE. MEASURE.</h1>
                <div className={styles.smallSlogan}>Join Bitly, the world's leading link management platform.</div>
            </div>
        )
    }
}

export default Slogan 