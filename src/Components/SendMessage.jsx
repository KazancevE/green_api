import React from "react";



class SendMessageForm extends React.Component {
    render() {
        
        return (
            <form
                onSubmit={this.props.messages}
                className="send-message-form">
                <input
                    name='send'
                    value={this.props.messages}
                    placeholder="Введите сообщение"
                    type="text" />
                {/*<button >Отправить</button>*/}
            </form>

        )
    }
}

export default SendMessageForm;