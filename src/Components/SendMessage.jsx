import React, {useState} from "react";

function SendMessageForm({onSubmit, userInfo}) {

    //так ...ну это хуйня состояния ...я хз как её объяснить ...просто прими как есть...setValue('123') - это типо присваиваем значение в value
    // эта хуйня асинхронная , так что осторожно
    const [value, setValue] = useState('');

    //это вызывается после ентера ...отменяем дефолтное действие и отправляем сообщение
    const checkClick = (event) => {
        event.preventDefault();
        postMessage();
    };

    const inputChange = (event) => {
        setValue(event.target.value);
    };

    const postMessage = async () => {
        // const dat = {
        //     sender: user,
        //     message: '',
        // }
        let res = await fetch(
            `https://api.green-api.com/waInstance${userInfo.idInstance}/SendMessage/${userInfo.apiTokenInstance}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({chatId: userInfo.userId, message:value})
                }
        ).then(res => {
            // когда узнали что отправилось удачно я наружу (в app ) говорю что отправлено
            onSubmit('send');
            // присваиваю в инпут пустоту ...ибо смс отправлено ...нахуй там текст
            setValue('');
        }).catch(err => {
            // тут можно будет замутить тему, что мол ошибка и вывести на экран ...сам додумаешь
        });
        // let data = await res.json();
        // this.state.items(this);
        console.log(res);
        // return await data;

    };
    // там дальше вроде нихуя сложного
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