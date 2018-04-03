import React, { Component } from 'react';
import styles from './app.css';

import Shorten from '../Shorten/Shorten.js';

/* Main parent component for the single page application */
class App extends Component {

    render() {
        return(
            <div className={styles.app}>
                <Shorten />
            </div>
        )
    }
}

export default App