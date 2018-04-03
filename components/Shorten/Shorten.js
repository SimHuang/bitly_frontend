import React, { Component } from 'react';
import styles from './shorten.css';

import  BitlySDK  from '../../sdk.js';
import  credentials  from '../../properties.js';

import Header from '../Header/Header.js';
import Slogan from '../Slogan/Slogan.js';
import Search from '../Search/Search.js';
import ShortenError from '../ShortenError/ShortenError.js';
import BitlinksContainer from '../BitlinksContainer/BitlinksContainer.js';

class Shorten extends Component {
    constructor(props) {
        super(props);

        this.shouldDisplayLinks = this.shouldDisplayLinks.bind(this);
        this.countDownTimer = this.countDownTimer.bind(this);

        this.state = {
            errorClick: false,
            showLinks: false,
            timer: 4,
            timeInterval: null,
            bitlinks: []
        }
    }

    /**
     * Determine what conditional components should render based on 
     * the search.
     */
    shouldDisplayLinks(errorState, showLinkstate, link) {
        let bitLinkList = this.state.bitlinks;
        //set timer for the error component if error state is true
        if(errorState) {
            clearInterval(this.timer);
            this.setState({timer:4});
            this.timer = setInterval(this.countDownTimer,1000);   

        }else {
            //push new link if it's not error state
            bitLinkList.push(link);
        }

        this.setState({
            errorClick: errorState,
            showLinks: showLinkstate,
            bitlinks: bitLinkList
        });
    }

    /** Decrement the counter  */
    countDownTimer() {
        let remainingTime = this.state.timer - 1;
        if(remainingTime === 0) {
            clearInterval(this.timer);
            this.setState({
                errorClick: false,
                timer: 4
            });

        }else {
            this.setState({
                timer: remainingTime
            });
        }
    }

    render() {
        return (
            <div className={styles.shortenWrapper}>
                <div className={styles.background}>
                    {this.state.errorClick ? <ShortenError /> : null}
                    <Header />
                    <Slogan />
                    <Search displayComponents={this.shouldDisplayLinks}/>
                    {this.state.showLinks ? <BitlinksContainer bitlinks={this.state.bitlinks}/> : null }
                </div>
            </div>
        )
    }
}

export default Shorten