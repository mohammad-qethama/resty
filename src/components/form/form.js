import React from 'react';
import Superagent from 'superagent';
import { trackPromise } from 'react-promise-tracker';
import './form.scss';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            url:'',
            method:''
        }
    }



    handleHistory= () => {
        this.props.history(true)

    }
    handelSubmit =  async (event)=>{
        event.preventDefault();
         this.setState((prevState,props)=> {return {method:event.target.method.value,url:event.target.url.value}}, () => callMethods(this.state.method,this.state.url))
        
        
        let raw;
        let classMethod;
        const propHandler = (prop1,prop2,prop3,prop4)=>this.props.handler(prop1,prop2,prop3,prop4);
        propHandler({},{},{},false)

       async function callMethods(method,url){
        try {
        

          classMethod = method;
         
          
          switch (classMethod){
              
            case 'GET':
                await trackPromise(
                    Superagent.get(url).then(data => {
                     raw = data;
                    //  console.log('from raw',raw)
                 } ));
            break; 
            case 'POST':
                await trackPromise(
                    Superagent.post(url).then(data => {
                     raw = data;
                    //  console.log('from raw',raw)
                 } ));
            break;
            case 'PUT':
                await trackPromise(
                    Superagent.put(url).then(data => {
                     raw = data;
                    //  console.log('from raw',raw)
                 } ));
            break;
            case 'DELETE':
                await trackPromise(
                    Superagent.delete(url).then(data => {
                     raw = data;
                    //  console.log('from raw',raw)
                 } ));
            break;
            default:
            break;
        } }catch (error) {
        //    console.log('error',error);
        }
        // console.log(raw)
        if (raw){
        
        let classHeaders = {
            Headers:raw.headers
        }
        let classResults =  {
            Response:(raw.body)?(raw.body.results)?raw.body.results:raw.body:{},
        }
        let bodyString;
        if (raw.body){
             bodyString = JSON.stringify(raw.body)
        }
        localStorage.setItem(`${url} ${method}`,`${url} ${method} ${bodyString}`)
        propHandler(raw.body.count,classResults,classHeaders,true)
       }
       else{
        // console.log('invalid method or/and url')
        propHandler({},{},{},false)
       }
     }
    }

    render(){
        return (
        <div >
            <form className= 'formURL' action={this.state.method} onSubmit={this.handelSubmit}>
                <label htmlFor="url">URL</label>
                <input  type="url"  name="url" />
                <input type="submit" value="GO" />
                <br />
                <input type="radio" id="GET" name="method" value="GET"/>
                <label htmlFor="GET">GET</label>
                <input type="radio" id="POST" name="method" value="POST"/>
                <label htmlFor="POST">POST</label>
                <input type="radio" id="PUT" name="method" value="PUT"/>
                <label htmlFor="PUT">PUT</label>
                <input type="radio" id="DELETE" name="method" value="DELETE"/>
                <label htmlFor="DELETE">DELETE</label>
            </form>
            <button onClick={this.handleHistory}>show history</button>
            
        </div>
        )
  
 } 

}

export default Form;