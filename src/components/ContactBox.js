// import { DoneAll } from '@material-ui/icons'
import React from 'react'
import Header from './Header'

export default function ContactBox({ contact, setContactSelected, messages }) {
    const lastMsg = messages[messages.length-1]

    const reduceLength=(text, length)=> {
        if(!text) return
        return text.length > length ? `${text.substring(0, length)} ...` : text
    }
    return (
        <div className="contact-box" onClick={() => setContactSelected(contact)}>
            <Header user={contact} />
            <div className="right-section">
                <div className="contact-box-header">
                    <h3 className="avatar-title">{contact.name}</h3>
                    <span className="time-mark">{lastMsg?.date?.toLocaleDateString()}</span>
                </div>
                <div className="last-msg">
                    <span className="text">{reduceLength(lastMsg?.msg, 40)}</span>
                </div>
            </div>
        </div>
    )
}
