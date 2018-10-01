import React from 'react';

export default function Todo(props){
    console.log(props);
    let display = props.list.map(elem=><h2>{elem}</h2>)
    return <div>{display}</div>
}