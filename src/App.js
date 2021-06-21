import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import './App.scss'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      results:'',
      headers:'',
      count:0,

    }

  }


 handelData = (count,results,headers)=>{
   this.setState({results:results,count:count,headers:headers})
  
 }

  render() {
    return (
      <div className='app' >
      <Header />
      <Form handler = {this.handelData}/>
      <Results count={this.state.count} results = {this.state.results} headers={this.state.headers} />
      <Footer />
     </div>
    )
    
  }
}

export default App;
