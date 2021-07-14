import React, { useRef, useEffect } from 'react'
import Message from './Message'

export default function MessagesContainer({ messages, data2 }) {
      
    const endDiv = useRef(null)
    useEffect(() => {
        endDiv.current.scrollIntoView()
    }, [messages])

    return (
        <div className="chats">
            {
            messages
                .filter((message)=>message.id===data2.contact.id)
                .map((m, i) => (
                    <Message message={m} key={i} />
                ))}
            <div style={{ float: 'right', clear: 'both' }} ref={endDiv}></div>
        </div>
    )
}
