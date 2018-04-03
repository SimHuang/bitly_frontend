import React, { Component } from 'react';

import styles from './bitlink.css';

class BitLink extends Component {
    constructor(props) {
        super(props);
    }

    renderTitleText() {
        return this.props.bitlink.title ? 
                <div className={styles.bitlinkTitle}>{this.props.bitlink.title}</div> : 
                <div className={styles.bitlinkTitle}>{this.props.bitlink.long_url}</div>
    }

    render() {
        return (
            <div className={styles.bitlinkContainer}>
                {this.renderTitleText()}
                <div className={styles.bitlinkLong}>{this.props.bitlink.long_url}</div>
                <div className={styles.shortbitlinkContainer}>
                    <span className={styles.bitlinkShort}>{this.props.bitlink.url}</span>
                    <span className={styles.bitlinkStats}>
                        {this.props.bitlink.globalClicks}
                    </span> 
                    {/* <span className={styles.bitlinkImage}></span> */}
                </div>
            </div>
        )
    }
}

export default BitLink