import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
	state={
  	counter:0
  }
  

  renderButtonComponent=(text,callback)=>{
   return (
   <button onClick={() =>callback()}>
	{text}
   </button>
   )
  }

	render(){
  //this.props ci da le var passate da classi estese
		return (
		<div>
			<h1> 
			Contatore : {this.state.counter}
			</h1>
			
			{this.renderButtonComponent("Aumenta di 1",() => this.setState({counter: this.state.counter +1}))}
			
			{this.renderButtonComponent("Diminuisci di 1",() => this.setState({counter: this.state.counter -1}))}    	
    	  
    	</div>
      
      
    )
	}
}

export default App;

