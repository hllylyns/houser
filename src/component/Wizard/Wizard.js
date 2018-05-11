import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import StepOne from '../Steps/StepOne';
import StepTwo from '../Steps/StepTwo';
import StepThree from '../Steps/StepThree';


class Wizard extends Component {


    render() {
        return (
            <div>
                <div>Add New Listing</div>
                <Link to='/'><button className='btn red'>Cancel</button></Link>
                <Switch>
                    <Route component={StepOne} path='/wizard/step1' />
                    <Route component={StepTwo} path='/wizard/step2' />
                    <Route component={StepThree} path='/wizard/step3' />
                </Switch>
                
            </div>
        );
    }
}

export default Wizard;