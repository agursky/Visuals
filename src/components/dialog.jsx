import React from 'react';
import ReactDOM from 'react-dom';


class Dialog extends React.Component { 
    
 
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(str) {
        this.props.clickFunc(str);
    }
    
  render() {
      if(this.props.viewStatus) {
          return (
        <div className='dialog'>
          {this.props.list.map(function(item, ind) {
            return <button onClick={function() {this.props.clickFunc(item)}.bind(this)} className='chooser' key={ind}>{item}</button>;
          }.bind(this))}
        </div>
      );  
      } else {
          return null;
      }
    
  }    
}

export default Dialog;