import React, {Component} from 'react';


  class Cards extends Component {
      
    render() {
      return (

        <div  id ={this.props.id} className="grid-item" onClick={ this.props.clickFunction }   ></div>




        );
    }
  }  
  export default Cards;