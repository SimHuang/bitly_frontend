import React, { Component } from 'react';
import  BitlySDK  from '../../sdk.js';
import  credentials  from '../../properties.js';

import styles from './search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /**
     * Method to shorten url
     */
    handleSubmit(event) {
        event.preventDefault();

        let options = {
            login: credentials.login,
            apiKey: credentials.apiKey
        }

        let bitlyObject = new BitlySDK(options);
        let bitlyShortenPromise = bitlyObject.shorten(this.state.url);

        //shorten request
        bitlyShortenPromise.then((value) => {
            
            let infoPromise = bitlyObject.info(value.url);
            let clickPromise = bitlyObject.clicks(value.url);

            Promise.all([infoPromise, clickPromise]).then(data => {
                value.title = data[0].title;
                value.globalClicks = data[1][0].global_clicks;
                this.props.displayComponents(false, true, value);
                
            }).catch(value => {
                console.log('Error retrieving data.');
                this.props.displayComponents(true, false, null);
            })

        }).catch(value=> {
            console.log('Error shortening');
            this.props.displayComponents(true, false, null);
        });
    }

    handleInputChange(event){
        this.setState({url: event.target.value});
    }

    render() {
        return( 
            <div className={styles.searchContainer}>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <input className={styles.search} onChange={this.handleInputChange} value={this.state.url} type="input" placeholder="Paste a link to shorten it"/>
                        <input className={styles.searchBtn} type="submit" value="SHORTEN"/>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Search