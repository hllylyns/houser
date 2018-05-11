import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updatePropName, updateAddress, updateCity, updateState, updateZip} from '../../ducks/reducer';

class StepOne extends Component {
    constructor(){
        super();

        this.state={
            property_name:'' ,
            address:'',
            city:'',
            state:'',
            zip: 0
        }
        this.handlePropNameChange = this.handlePropNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
    }
  
    handlePropNameChange(value) {
        this.setState({ property_name: value });
    }
    handleAddressChange(value) {
        this.setState({ address: value });
    }
    handleCityChange(value) {
        this.setState({ city: value });
    }
    handleStateChange(value) {
        this.setState({ state: value });
    }
    handleZipChange(value) {
        this.setState({ zip: value });
    }
    render() {
        return (
            <div>
                <p>Property Name </p>
                <input value={this.state.property_name}
                    onChange={(e) => this.handlePropNameChange(e.target.value)} />
                <p>Address </p>
                <input value={this.state.address}
                    onChange={(e) => this.handleAddressChange(e.target.value)} />
                <p>City </p>
                <input value={this.state.city}
                    onChange={(e) => this.handleCityChange(e.target.value)} />
                <p>State </p>
                <input value={this.state.state}
                    onChange={(e) => this.handleStateChange(e.target.value)} />
                <p>Zip </p>
                <input value={this.state.zip}
                    onChange={(e) => this.handleZipChange(e.target.value)} />
                <Link to='/wizard/step2'><button /*onClick = {this.props.updateListing}*/ className='btn red'>Next Step</button></Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
    property_name: state.property_name ,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip
    }
}

export default connect(mapStateToProps, {updatePropName, updateAddress, updateCity, updateState, updateZip})(StepOne);