import { Component } from "react";
import './VaildationSample.css';


class VaildationSample extends Component {
    state = {
        password : '',
        clicked : false,
        vaildated : false
    }
    handleChange = (e) => {
        this.setState({
            password : e.target.value
        });
        
    }
    handlebuttonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus();
    }
        render() {
            return (
                <div>
                    <input
                    ref = {(ref) => this.input=ref}
                    type = "password"
                    value = {this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? this.state.vaildated ? 'success' : 'failure' : ''}
                ></input>
                <button onClick={this.handlebuttonClick}>검증하기</button>
            </div>
            )
    }
}
export default VaildationSample;