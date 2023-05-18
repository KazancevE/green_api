import React, {useState} from "react";

function SendMessageForm(props) {

    const [value, setValue] = useState('');

    const checkClick = (event) => {
        event.preventDefault();
        console.log('value', event.target.value);
    };

    return (
        <form
            onSubmit={checkClick}
            className="send-message-form">
            <input
                name='send'
                value={value}
                placeholder="Введите сообщение"
                type="text" />
            {/*<button >Отправить</button>*/}
        </form>

    )
}



export default SendMessageForm;