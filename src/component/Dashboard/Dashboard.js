import React, { Component } from 'react';
import House from '../../component/House/House';
import {Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super();

        this.state={
            houses: []
        }

        this.handleDeleteListing = this.handleDeleteListing.bind(this);
    }
    
    componentDidMount(){
        axios.get('/api/listings').then(res=>{
            console.log(res.data);
            this.setState({houses: res.data});
          });
    }

    handleDeleteListing(item_id){
        axios.delete(`/api/listings.${item_id}`).then(res=>{
            console.log(res.data);
            this.setState({houses: res.data})
        });
    }

    render(){
        const housesList = this.state.houses.map((e, i) => (
            <h3 key={ i }>{ e }</h3>
          ));
      

        return (
        <div>
            <div className="component bckgrd">Dashboard</div>
            <Link to='/wizard/step1'><button className='btn green'>Add New Property</button></Link>
            <House delete = {this.handleDeleteListing}/>
        </div>
    );
    }
} 

export default Dashboard;