import React, {Component} from 'react';

export default function Todo(props){
    let display = props.listItems.map(elem=><h2>{elem}</h2>);
    return <div>{display}</div>
}