import React,{Component} from 'react';
import Todo from './Todo';

export default function List(props){
    return<div>
        <Todo list={props.list}></Todo>
    </div>
}

