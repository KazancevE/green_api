import React from "react";

class MessageList extends React.Component {
    render() {
        return (
            <ul className='message_list'>
                {this.props.messages.map(message => {
                    return(
                        <li key={message.id}>
                            <div>
                                {/*{message.sender}*/}
                            </div>
                            <div>
                                {/*{message.message}*/}
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default MessageList;