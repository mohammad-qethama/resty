import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import If from './components/if/if.js';
import LoadingIndicator from './components/promisesTracker/promisesTracker.js';
import History from './components/history/history.js'
import Loader from 'react-loader-spinner';
import './App.scss'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      results:'',
      headers:'',
      count:0,
      goFlag:false,
      historyFlag:false
      
    }

  }
  handleHistory = (flagFormHistory)=>{
    this.setState({historyFlag:flagFormHistory})
   
  }
  handleRoutes = (string) => {
    console.log('inAPP',string);

  }

 handelData = (count,results,headers,flagForm)=>{
   this.setState({results:results,count:count,headers:headers,goFlag:flagForm})
  
 }
//  handelState = (loadingFlag)={

//  }

  render() {
    return (
      <div className='app' >
      <Header />
      <Form handler = {this.handelData} history = {this.handleHistory} />
      <div className='outputArea'>
      <If condition= {this.state.goFlag}>
      <Results count={this.state.count} results = {this.state.results} headers={this.state.headers} />
      </If>
  
      <If condition= {this.state.historyFlag}>
      <History route={this.handleRoutes}/>
      </If>
      </div>

      <LoadingIndicator/>
      <Footer />
     </div>
    )
    
  }
}

export default App;
