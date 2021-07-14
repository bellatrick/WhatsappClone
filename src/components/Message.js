import { DoneAll } from '@material-ui/icons'
import React from 'react'

export default function Message({ message }) {
    if(!message) return
    return (
        <div className={`message ${message?.isMainUser ? 'sent' : 'received'}`}>
            {message?.msg}
            <div className="metadata">
                <span className="date">{message?.date?.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
                    {message.isMainUser && <DoneAll/>}
            </div>
        </div>
    )
}
