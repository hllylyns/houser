import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';

class StepThree extends Component {
    constructor(){
        super();

        this.state={
            mortgage:0,
            rent:0
        }
    }
    handleComplete(property_name, address, city, state, zip) {
        axios.post('/api/listings', {property_name, address, city, state}).then(res=>{
        this.setState({property_name: res.data.property_name, address: res.data.address, city:res.data.state, state: res.data.state, zip: res.data.zip});
        });
      }
    handleMortgageAdd(value) {
        this.setState({ property_name: value });
    }
    handleRentAdd(value) {
        this.setState({ address: value });
    }
    
    render() {
        return (
            <div>
                <p>Monthly Mortgage Amount </p>
                <input value={this.state.mortgage}
                    onChange={(e) => this.handleMortgageAdd(e.target.value)} />
                <p>Desired Monthly Rent </p>
                <input value={this.state.rent}
                    onChange={(e) => this.handleRentAdd(e.target.value)} />
                 <Link to='/'><button onClick={this.handleComplete} className='btn green'>Complete</button></Link>
            </div>
        );
    }
}

export default StepThree;