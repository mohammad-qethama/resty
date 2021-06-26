import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import If from './components/if/if.js';
import LoadingIndicator from './components/promisesTracker/promisesTracker.js';
import History from './components/history/history.js'
import PageOfHistory from './components/historyPage/historyPage.js';
import HelpPage from './components/helpPage/helpPage.js';
// import Loader from 'react-loader-spinner';
import './App.scss'
let url;
class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      results:'',
      headers:'',
      count:0,
      goFlag:false,
      historyFlag:false,
      errorForm:'',
      url:'',
      urlHP:''
      
    }

  }
  handelUrl =  (e)=> {
    this.setState({url:''})
  } 

  errorHandler = (error)=> {
      this.setState({errorForm:error,headers:null,results:null})
    }
  handleHistory = (flagFormHistory)=>{
    // this.setState({historyFlag:!}return {historyFlag:!prevState.showFlag,data:'',keyVal:''})
    this.setState((prevState,props)=> {return {historyFlag:!prevState.historyFlag} })

  }
  handleRoutes = (string) => {
    console.log('inAPP',string);
    this.setState({url:string.split(' ')[2]})

  }

 

 handelData = (count,results,headers,flagForm)=>{
   this.setState({results:results,count:count,headers:headers,goFlag:flagForm})
  
 }

 
//  handelState = (loadingFlag)={

//  }

  render() {
    if(this.props.location && this.props.location.state){
             
       console.log(this.props.location.state);
       url = this.props.location.state.data;
      console.log(url)

    }

    return (
      <div className='app' >
      <Header />
   
      <Route exact path='/'>
      <Form handler = {this.handelData} history = {this.handleHistory} errorH={this.errorHandler} url ={this.state.url} urlfromHP={(this.props.location && this.props.location.state)?this.props.location.state.data:''} handlerUrl={this.handelUrl}/>
      <div className='outputArea'>
      <If condition= {this.state.goFlag}>
      <Results count={this.state.count} results = {this.state.results} headers={this.state.headers} errors ={this.errorForm} />
      </If>
  
      <If condition= {this.state.historyFlag}>
      <History route={this.handleRoutes}/>
      </If>
      </div>
      <LoadingIndicator/>
      </Route>
     

      <Route exact path ='/History'>

      <PageOfHistory  ></PageOfHistory >

      </Route>
      <Route  exact path ='/Help'>
        <HelpPage/>
        </Route>

      <Footer />
     </div>
    )
    
  }
}



export default withRouter(App);
