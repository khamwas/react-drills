import React from 'react';

export default function NewTask(props){
    return<div>
    <button onClick={()=>props.newTask()}>Add</button>
    </div> 
}