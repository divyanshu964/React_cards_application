import { render } from '@testing-library/react'
import React,{Component} from 'react'
import Avatar from './Avatar'
import './avatarlist.css'

//const Avatarlist = () => {
class Avatarlist extends Component{
    
    constructor(){
        super();
        this.state = {
            name:"Welcome to Avatar World"
        }
    }
    changename(){
        this.setState({
            name:"Avatar Mode is On"
        })
    }
    render(){
        const avatarlistarray=[
            {
                id:1,
                name:"Divyanshu",
                work:"System Admin"
            },
            {
                id:'2',
                name:"John Wick",
                work:"FrontEnd Developer"
            },
            {
                id:'4',
                name:"Iron Man", 
                work:"BackEnd Developer"
            },
            {
                id:'4',
                name:"Lucy", 
                work:"AI/ML"
            }
        ]

        const avatarcards=avatarlistarray.map((avatarcard, i) =>{
            return <Avatar key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />
        })
        return <div className="mainpage">
                <h1>{this.state.name}</h1>
                {avatarcards}
                <div className="btn">
                    <button onClick= {() => this.changename()} >SUBSCRIBE</button>
                </div>
            </div>
    }
}

export default Avatarlist;