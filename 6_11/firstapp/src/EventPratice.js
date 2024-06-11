//컴포넌트 클래스/
import { Component } from "react";

class EventPratice extends Component {
    state = {
    message : ''
    }
    render(){
        return(
            <div>
                <h1>이벤트 실습</h1>
                <input type="text"
                       name="message"
                       placeholder="아무거나 입력하세요"
                       value={this.state.message}
                       onChange={
                        (e) => {
                            this.setState({
                           message : e.target.value
                        })
                        }
                       }>

                       </input>
                       <button onClick={
                        () => {
                            alert(this.state.message);
                            this.setState({
                                message : ''
                            });
                        }
                       }>확인하기</button>
                       </div>
        )
    }
}
export default EventPratice;