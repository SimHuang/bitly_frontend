import React, { Component } from 'react';

import styles from './header.css';

class Header extends Component {
    render() {

        return ( 
            <div>
                <header className={styles.header}>
                    <div className={styles.logo}>
                        {/* <img alt="" src="../../logo.svg"/> */}
                    </div>
                    <nav className={styles.navbar}>
                        <ul>
                            <li>Tour</li>
                            <li>Enterprise</li>
                            <li>Resources</li>
                            <li>About</li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header