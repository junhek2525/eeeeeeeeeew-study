import { Component } from "react";


class EventPrtice extends Component{
    state = {
        "message": '',
        "username": ''
    }
    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);

    // }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });

    }
    handleClick=() => {
        alert(this.state.message + ': '+ this.state.message);
        this.setState({
            "message": '',
        "username": ''
        });
    }
    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            onclick();
        }
    }

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="username" placeholder="" value={this.state.username} onChange={this.handleChange}>
                </input>
                <input type="text" name="message" placeholder="" value={this.state.message} onKeyPress = {this.handleKeyPress}onChange={this.handleChange}>
                </input>
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}
export default Event2;