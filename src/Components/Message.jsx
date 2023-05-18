import React from "react";

function MessageList({messages}) {
    return (
        <ul className='message_list'>
            {messages && messages.length && messages.map(message => {
                return(
                    <li key={message && message.id}>
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

export default MessageList;