import './App.css';
import React, {useState} from 'react';
import MessageList from "../../Components/Message";
import SendMessageForm from "../../Components/SendMessage";
// import {getMessage} from "@testing-library/jest-dom/dist/utils";
// import message from "./Components/Message.js";
// import {getMessage} from "@testing-library/jest-dom/dist/utils";
// const greenUrlApi = 'https://api.green-api.com';
const user = '79969387689@c.us';
const idInstance = '1101820465';
const apiTokenInstance = 'badec56c32524eef9e16b1ddb438a93690db96def14c449793';

// let DATA = [];

function App() {

    const [messages, setMessages] = useState([]);

    const postMessage = async (value) => {
        // const dat = {
        //     sender: user,
        //     message: '',
        // }
        let res = await fetch(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({chatId: user, message:value})

            });
        let data = await res.json();
        // this.state.items(this);
        console.log(await data);
        // return await data;

    };

    // sender: result.senderData.senderName,
    // message: result.messageData.textMessageData.textMessage,

    const getMessage = async () => {
        // e.preventDefault();//убирает стандартное поведение формы
        const api_url = await fetch(`https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
        const data = api_url.json();
        console.log(data);
        this.state.items.push(data);
        return data;
    };

    const onSubmitWatcher = (value) => {
        postMessage(value);
    };


    return (
        <div>
            {/*<Title />*/}
            <MessageList messages={messages} />
            <SendMessageForm onSubmit={onSubmitWatcher} />
        </div>
    )
}

export default App;
