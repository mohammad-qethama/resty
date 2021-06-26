import React from 'react';
import If from '../if/if.js';
import JSONPretty from 'react-json-pretty';
import { Link,withRouter } from 'react-router-dom';
import './historyPage.scss';

class PageOfHistory extends React.Component {
 constructor(props){
  super(props);
  this.state={
    url:'',
    method:'',
    storage: localStorage || {} ,
    showFlag:false,
    data:{},
    keyVal:'',
    reDirectFlag:false
    }
  }
 
  handleShowHide = (e)=>{
    this.setState((prevState,props)=> {return {showFlag:!prevState.showFlag,data:'',keyVal:''} })
  }
  handleDetails = (e)=>{
    // console.log(this.state.storage)
    if (Object.keys(this.state.storage).length){

      let dataObj = localStorage.getItem(e.target.innerText);
      (dataObj)? dataObj = JSON.parse(dataObj):dataObj={};
      // console.log(dataObj);

      this.setState({data:dataObj,keyVal:e.target.innerText})
    }
  }
  // handleHisPAge=  (e)=>{
  //     e.preventDefault();
  //     console.log('inHistory', e.target.req.value)
  //     let req = e.target.req.value;
  //     this.props.loadData(req);
  //     this.setState({reDirectFlag : true})
  
  // }

  render() {
    return(
      <div>
        <button onClick = {this.handleShowHide}>ٍShow History</button> 
        <div className='outputAreaH' >
       
          <div className='results' >
          { Object.keys(localStorage).map((value,idx) =>{

            return(   <div key ={idx} >
                  <div   id ={value}  onClick={this.handleDetails}>
                  {value}
                 </div>

                 <Link to={{
                   pathname:'/',
                   state:{
                     data: value
                   }
                 }}>
                   reHit from Home
                 </Link>
                  {/* <form onSubmit = {this.handleHisPAge}>
                    <input type="text" name = 'req' defaultValue={value} hidden />
                    
                    <input type="submit" defaultValue="Hit It Again" />
                
                  </form> */}
              

               </div>
           )
          })
            
          }
        </div>
    
          
          <If condition={true}>
          <div className='results'>
            
            <div >
              <h3>{this.state.keyVal}</h3>
            <JSONPretty  data={this.state.data} ></JSONPretty> 

            </div>
          </div>
          </If>

          {/* <If condition={this.state.reDirectFlag}>
            <Redirect to='/'/>;
          </If> */}
       
      </div>
      </div>
    )
  }


}

export default withRouter(PageOfHistory);