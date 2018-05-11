import React, { Component } from 'react';

export default function House(props) {
    return (
        <div>
            House 
            <button onClick = {props.delete} className = "btn x">Delete</button>
        </div>
    )
}