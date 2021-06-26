import React from 'react';
import Superagent from 'superagent';
import { trackPromise } from 'react-promise-tracker';
import './form.scss';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            url:'',
            method:'',
            dataString:''
        }
    }
    handleChange = (e) => {
     this.setState({url:e.target.value});
    }
    componentDidUpdate(prevProps){
        console.log('form',this.props.urlfromHP);
        if(prevProps.url !== this.props.url){
            this.setState({url:this.props.url});

        }
       

    }
    componentDidMount(){
        if(this.props.urlfromHP){
            let propsUrl = this.props.urlfromHP.split(' ')[0];
            this.setState({url:propsUrl});

        }
    }

    handleHistory= () => {
        this.props.history(true);

    }
    handelSubmit =  async (event)=>{
        event.preventDefault();
        this.setState((prevState,props)=> {return {method:event.target.method.value,url:event.target.url.value,dataString:event.target.body.value}}, () => callMethods(this.state.method,this.state.url,this.state.dataString))
        
        let raw;
        let classMethod;
        const propHandler = (prop1,prop2,prop3,prop4)=>this.props.handler(prop1,prop2,prop3,prop4);
        propHandler({},{},{},false)
        const errorHandler = (error) => this.props.errorH(error)
       async function callMethods(method,url,body){
        try {
            if(body){
                try {
                    JSON.parse(body);
                    console.log('sadness',body);
                } catch (error) {
                    errorHandler(error)                }
            }

          classMethod = method;
         
          
          switch (classMethod){
              
            case 'GET':
                await trackPromise(
                    Superagent.get(url).then(data => {
                     raw = data;
                    //  console.log('from raw',raw)
                } ).catch(error =>{return errorHandler(error)}));
            break; 
            case 'POST':
                await trackPromise(
                    Superagent.post(url).set('Content-Type', 'application/json')
                    .accept('application/json')
                    .send(body).then(data => {
                        console.log(data.body);
                        raw =data;
                 } ).catch(error =>{console.log(error)}));
            break;
            case 'PUT':
                await trackPromise(
                    Superagent.put(url).set('Content-Type', 'application/json').accept('application/json')
                    .send(body).then(data => {
                     raw = data;
                     console.log('from raw PUT',raw)
                } ).catch(error =>{errorHandler(error)}));
                break;
            case 'DELETE':
                await trackPromise(
                    Superagent.delete(url).then(data => {
                     raw = data;
                    //  console.log('from raw',raw)
                } ).catch(error =>{return errorHandler(error)}));
            break;
            default:
            break;
        } }catch (error) {
            errorHandler(error)
        }
        // console.log(raw)
        try {
            
        
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
        localStorage.setItem(`${url} ${method}`,`${bodyString}`)
        propHandler(raw.body.count,classResults,classHeaders,true)
       }
       else{
        errorHandler('invalid method or url')
        

       }
    } catch (error) {
        errorHandler(error)    
      }
     }
    }
    
    render(){
        console.log(this.props.urlfromHP)
        return (
        <div >
            <form className= 'formURL' action={this.state.method} onSubmit={this.handelSubmit} >
                <label htmlFor="url">URL</label>
                <input  type="url"  name="url" value={this.state.url }  onChange = {this.handleChange}/>
                <input type="submit" value="GO" />
                <br />
                <input type="radio" id="GET" name="method" value="GET" defaultChecked/>
                <label htmlFor="GET">GET</label>
                <input type="radio" id="POST" name="method" value="POST"/>
                <label htmlFor="POST">POST</label>
                <input type="radio" id="PUT" name="method" value="PUT"/>
                <label htmlFor="PUT">PUT</label>
                <input type="radio" id="DELETE" name="method" value="DELETE"/>
                <label htmlFor="DELETE">DELETE</label>
                <br />
                <input type="text"  id="dataForm" name="body"  />
            </form>
            <button onClick={this.handleHistory}>show history</button>
            
        </div>
        )
  
 } 

}

export default Form;