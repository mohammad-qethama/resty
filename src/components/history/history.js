import React from 'react';
class History extends React.Component {
 handleClick= (e) => {
   let req = e.target.innerText;
   this.props.route(req);
 }
  render() {
      // console.log("keys ", Object.keys(localStorage).toString());
      return (
     <div>
       {
         Object.keys(localStorage).map((string,idx)=>{
           let stringArr = string.split(' ');
          return( <div key={idx}>
              <p value={`${stringArr[1]} ${stringArr[0]}`} onClick={this.handleClick}  >{stringArr[1]} <span> &nbsp; </span> {stringArr[0]}</p>
                          
            </div> )
         })
       }
     </div>
      )
 }
}

export default History;