import React, { Component } from 'react'

export class ClassCom2 extends Component {
    state = {
        name: '',
        list: []
    }

    addInput=(e)=>{
        //console.log(e.target.value)
        this.setState(()=> ({name: e.target.value}))
    }
    AddToDo = () =>{
        //console.log(this.state.name)
        console.log(this.state.list)
        this.setState((prevState)=> prevState.list.push(this.state.name));
    }
    
  render() {
    return (
      <div className='text-center'>
        <p>Write here</p>
        <input 
        className='outline px-2'
        type='text' placeholder='write something...'
        onChange={this.addInput}
        />
        <button
        className='bg-yellow-400 mx-2 px-2 rounded'
        onClick={this.AddToDo}> Add</button>
        <h3>To do</h3>
        <ul className = 'ms-20 w-4/5 px-6 mt-4 text-xl text-center'>
            {
                this.state.list.map((q, i) => {
                    return (
                        <li key={i} className = 'bg-gray-600 mb-2 rounded px-3 py-2 shadow-lg w-fit text-white'>
                            <label> {q}</label>
                        </li>
                    );
                })
                
            }
        </ul>
      </div>
    )
  }
}

export default ClassCom2