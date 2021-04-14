///(functional/class) component

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

//functional based architecture below
//props.___
const Demo = (props) =>{
    return  <div className="maindiv_style">
                    <h1>Hello {props.name}</h1> 
                    <p>Welcome to my channel.</p>
                </div>  //this is written in jsx not html.(React has its own virtual dom)
}

//class based architecture below
//this.props.___
/*
class Demo extends Component{
    render(){
        return  <div className="maindiv_style">
                    <h1>Hello {this.props.name}</h1> 
                    <p>Welcome to my channel.</p>
                </div>  //this is written in jsx not html.(React has its own virtual dom)
    }
}
*/
export default Demo

//know destructuring in ES6 (which is {this.__.__})
//props & states; props can't be changed by childrens, that's why states are used.