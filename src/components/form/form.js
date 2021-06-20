import React from 'react';
//import './form.scss';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            url:'',
            method:''
        }
    }



    handelInput =  (event)=>{

        this.setState({url:event.target.value})

    }

    handelMethod = (event)=>{
        
        this.setState({method:event.target.value})
    }

    render(){
        return (
        <div >
            <form className= 'formURL' action={this.state.method}>
                <label for="url">URL</label>
                <input onChange={this.handelInput} type="url"  name="url"/>
                <input type="submit" value="GO" />
            </form>
            <form className='radioForm' onChange={this.handelMethod} >
                <input type="radio" id="GET" name="gender" value="GET"/>
                <label for="GET">GET</label>
                <input type="radio" id="POST" name="gender" value="POST"/>
                <label for="POST">POST</label>
                <input type="radio" id="PUT" name="gender" value="PUT"/>
                <label for="PUT">PUT</label>
                <input type="radio" id="DELETE" name="gender" value="DELETE"/>
                <label for="DELETE">DELETE</label>
            </form>

            <div>
                <p>{this.state.method} {this.state.url} </p>
            </div>
        </div>
        )
  
 } 

}

export default Form;