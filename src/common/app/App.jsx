import './App.css';
import React from 'react';
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


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    sender: user,
                    message: '',
                }
            ]
        };
        // const {items} = this.state;
        // this.getMessage = this.getMessage.bind(this);
    };


    postMessage = async (e) => {
        e.preventDefault();
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
                body: JSON.stringify({chatId: user, message:'ddd'})

            });
        let data = await res.json();
        // this.state.items(this);
        console.log(await data);
        // return await data;

    };

    // sender: result.senderData.senderName,
    // message: result.messageData.textMessageData.textMessage,

    getMessage = async () => {
        // e.preventDefault();//убирает стандартное поведение формы
        const api_url = await fetch(`https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
        const data = api_url.json();
        console.log(data);
        this.state.items.push(data);
        return data;
    };

  render() {

        // const {items} = this.state;
        // getMessage();
        // console.log(this.state.items)
      return (
          <div>
              {/*<Title />*/}
              <MessageList messages = {this.state.items} />
              <SendMessageForm messages ={this.postMessage} />
          </div>
      )
  }
}

export default App;
