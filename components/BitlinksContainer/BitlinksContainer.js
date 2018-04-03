import React, { Component } from 'react';

import styles from './bitlinksContainer.css';

import BitLink from '../BitLink/BitLink.js';

class BitlinkContainer extends Component {
    constructor(props) {
        super(props);
        this.renderLinks = this.renderLinks.bind(this);
        //initially no links to render
        // this.state= {
        //     bitlinks:[]
        // }
    }

    renderLinks() {
        let bitlinks = this.props.bitlinks;
        return bitlinks.map((value, index) => {
            return (
                <BitLink bitlink={value} key={index} />
            ); 
        });
    }

    render() {
        return (
            <div className={styles.bitlinkContainer}>
                <div className={styles.bitlinks}>
                    {this.renderLinks()}                       
                </div>
            </div>
        )
    }
}

export default BitlinkContainer