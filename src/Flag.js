import React, { Component } from 'react'
import './Flag.css';

export default class Flag extends Component {
    render() {

        const {bgImg} = this.props;

        return (
            <div className="flag" style={{backgroundImage: `url(${bgImg})`}}>
                
            </div>
        )
    }
}
