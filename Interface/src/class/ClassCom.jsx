import React, { Component } from 'react'

export class ClassCom extends Component {
    state = {
        count:0
    }

    add = () =>{
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    sub = () =>{
        if(this.state.count>0)
        this.setState(prevState => ({count: prevState.count-1}))
    }
  render() {
    return (
      <>
        <button 
        className='bg-yellow-700'
        onClick={this.sub}>-
        </button> { }
        <label>{this.state.count}{ } </label>
        <button 
        className='bg-yellow-700'
        onClick={this.add}>+
        </button>
        
      </>
    )
  }
}

export default ClassCom