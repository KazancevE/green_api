import React, {useState} from "react";

function SendMessageForm({onSubmit}) {

    const [value, setValue] = useState('');

    const checkClick = (event) => {
        event.preventDefault();
        onSubmit(value);
        setValue('');
    };

    const inputChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form
            onSubmit={checkClick}
            className="send-message-form">
            <input
                name='send'
                value={value}
                onChange={inputChange}
                placeholder="Введите сообщение"
                type="text" />
            {/*<button >Отправить</button>*/}
        </form>

    )
}



export default SendMessageForm;