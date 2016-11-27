import React from "react";

import Header from "../Header";

export default class Layout extends React.Component{
constructor(){
  super();
  this.state = {title: "Welcome"};
}

changeTitle(title){
  this.setState({title: title});
}

render(){
    return(
      <Header title = {this.state.title} changeTitle = {this.changeTitle.bind(this)}/>
    );
  }
}
