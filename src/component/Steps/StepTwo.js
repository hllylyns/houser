import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class StepTwo extends Component {
    constructor(){
        super();

        this.state={
            image_url: ''
        }
    }
    
    handleUrlAdd(value) {
        this.setState({ image_url: value });
    }
    render() {
        return (
            <div>
                <p>Image URL </p>
                <input value={this.state.image_url}
                    onChange={(e) => this.handleUrlAdd(e.target.value)} />
                <Link to='/wizard/step3'><button className='btn red'>Next Step</button></Link>
            </div>
        );
    }
}

export default StepTwo;