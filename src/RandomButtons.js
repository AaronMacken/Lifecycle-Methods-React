import React, { Component } from 'react'
import './RandomButtons.css';

export default class RandomButtons extends Component {
    render() {
        const { correct, incorrect } = this.props;

        const incorrectButtons = incorrect.map((item, index) => {
            return [
                <label key={index} htmlFor={index}>{item}</label>,
                <input key={`Guess ${index}`} name={index} type="radio"></input>
            ]
        })


        return (
            <form className="gBtn">
                <label>{correct}</label> 
                <input name="guess button" type="radio"></input>
                {incorrectButtons}
            </form>
            
        )
    }
}
