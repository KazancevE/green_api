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

    const userInfo = {
        userId: user,
        idInstance: idInstance,
        apiTokenInstance: apiTokenInstance
    };

    //тут ты будешь хранить сообщения ... setMessages(messages) принимает массив
    const [messages, setMessages] = useState([]);



    // sender: result.senderData.senderName,
    // message: result.messageData.textMessageData.textMessage,

    const getMessage = async () => {
        // e.preventDefault();//убирает стандартное поведение формы
        const api_url = await fetch(`https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
        const data = api_url.json();
        console.log('1',data);
        // this.state.items.push(data);
        return data;
    };
    //тут короче думать надо ...получение сообщения как сделать, но тут я просто прописал, что после отправки
    //сделать гет
    const onSubmitWatcher = (value) => {
        if (value === 'send') {
            getMessage();
        }
    };


    return (
        <div>
            {/*<Title />*/}
            <MessageList messages={messages}  />
            {/*тут я короче жду что мессадж форм функцию выполнит и отправляю ей инфу юзера*/}
            <SendMessageForm onSubmit={onSubmitWatcher} userInfo={userInfo}/>
        </div>
    )
}

export default App;
