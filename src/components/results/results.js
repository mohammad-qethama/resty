import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss';
class Results extends React.Component {

  render() {
      // console.log("child : ", this.props.results)
      return (
         <div className='results'>
          <h3> Count:{this.props.count}</h3>

          <JSONPretty  data={this.props.headers} ></JSONPretty> 
          <JSONPretty data={this.props.results} ></JSONPretty> 
           
           
         </div>
      )
  }
}

export default Results;