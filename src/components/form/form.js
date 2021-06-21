import React from 'react';
import Superagent from 'superagent';
import './form.scss';

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
    handelSubmit =  async (event)=>{
        event.preventDefault();
        let classMethod = this.method;
        let raw =  await Superagent.get(this.state.url,{
                      
        })
        let classHeaders = {
            Headers:raw.headers
        }
        let classResults =  {
            Response:raw.body.results
        }
        console.log(raw.headers)
        this.props.handler(raw.body.count,classResults,classHeaders)
        
    }

    render(){
        return (
        <div >
            <form className= 'formURL' action={this.state.method} onSubmit={this.handelSubmit}>
                <label htmlFor="url">URL</label>
                <input onChange={this.handelInput} type="url"  name="url"/>
                <input type="submit" value="GO" />
            </form>
            <form className='radioForm' onChange={this.handelMethod} >
                <input type="radio" id="GET" name="gender" value="GET"/>
                <label htmlFor="GET">GET</label>
                <input type="radio" id="POST" name="gender" value="POST"/>
                <label htmlFor="POST">POST</label>
                <input type="radio" id="PUT" name="gender" value="PUT"/>
                <label htmlFor="PUT">PUT</label>
                <input type="radio" id="DELETE" name="gender" value="DELETE"/>
                <label htmlFor="DELETE">DELETE</label>
            </form>

            
        </div>
        )
  
 } 

}

export default Form;