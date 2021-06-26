import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss';
import If from '../if/if.js';
import Else from '../else/else.js'

class Results extends React.Component {

  render() {
      console.log("child : ", this.props.errors)
      return (
        <div className='results'>
        <If condition={this.props.errors}>
          <h2> Error: </h2>
          <p>{this.props.error}</p>
        </If>
        <Else condition={this.props.errors}>
        <h3> Count:{this.props.count}</h3>

          <JSONPretty  data={this.props.headers} ></JSONPretty> 
          <JSONPretty data={this.props.results} ></JSONPretty> 
        </Else>
           
         </div>
        
      )
  }
}

export default Results;