import {useState} from "react";

const Event2 = ()=>{
    const [from, setFrom] = useState({
        username: '',
        message: ''
    });
    const {username, message} = from;
    const onChange = e =>{
        const nextForm = {...form,
            [e.target.name] : e.target.value
        };
        setFrom(nextForm);
    };
    const onKeyPress = e =>{
        if(e.key === 'Enter'){
            onclick();
        }
    }
}