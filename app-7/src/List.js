import React,{Component} from 'react';
import Todo from './Todo';

class List extends Component{

    render(){
        return<div>
            <Todo list={this.props.list}></Todo>
            </div>
    }
}
export default List