import React from 'react';

export default function Todo(props){
    const display = props.list.map(elem=><h2>{elem}</h2>)
    return <div>
        {display}
    </div>
}