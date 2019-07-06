import React, {Component} from 'react';

export default class Counter extends Component{
    state ={
        value:1
    };

    render(){
        return (
            <div>
                <h>{this.state.value}</h>
                <p>Nilai = {this.state.value}</p>
                <button onClick={()=> {
                    this.setState({value:this.state.value+1});}} >increment </button>
            </div>);
    }
}