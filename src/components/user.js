import React, {Component} from "react";

class User extends Component{
	   save = (e) =>{
	   	e.preventDefault()
	   	console.log(e)
	   	console.log(e.target.msg)
	   	console.log(e.target.value)
	   	this.setState({messages:e.target.value})
	   }

	   	send =()=>{
	   		this.setState({message:this.state.message.concat(this.state.messages)})
	   	}

 
	state={
		message :[],
		messages :""
	}
	render() {
		return(
			<div className="user">
			<div id="user1">
	<ul className={this.props.user} id="msg-ul" className="msg-ul">
		{
			this.state.message.map(e=><li>{e}</li>)
		}
	</ul>
	<div className={this.props.user} id="send-bar">
		<input type="text-area" name="msg" id="msg" onChange={this.save} placeholder="   Type your message here..." />
		<button id="send-button" onClick={this.send}>|></button>
	</div>	
</div>
			</div>
		);
	}
}

export default User;