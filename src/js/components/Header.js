import React from "react";

import Input from "./Header/Input";
import Title from "./Header/Title";

export default class Header extends React.Component{
  render(){
    return(
      <div>
        <Title title = {this.props.title}/>
        <Input title = {this.props.title} changeTitle = {this.props.changeTitle}/>
      </div>
    );
  }
}
