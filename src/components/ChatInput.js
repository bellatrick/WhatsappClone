import { IconButton } from '@material-ui/core'
import { InsertEmoticon,  SendSharp } from '@material-ui/icons'
import React from 'react'


export default function ChatInput({ message, setMessage, pushMessage }) {
    function submitMessage(e) {
        if (e.key === 'Enter' && message) {
            pushMessage()
        }
    }
    return (
        <div className="chat-input-box">
            <div className="icon emoji-selector">
               <InsertEmoticon/>
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    autoFocus
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={submitMessage}
                />
            </div>

              <IconButton  onClick={()=>{message&&pushMessage()}}><SendSharp/></IconButton> 
        
            </div>
        
    )
}
