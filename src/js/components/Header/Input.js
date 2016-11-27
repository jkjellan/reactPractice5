import React from "react";

export default class Input extends React.Component{
handleChange(e){
  const title = e.target.value;
  this.props.changeTitle(title);
}

render(){
  return(
    <input value={this.props.title} onChange = {this.handleChange.bind(this)}></input>
  );
}

}
