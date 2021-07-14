
import React from 'react'
import Header from './Header'

export default function StatusContactBox({ contact, status,  setStatusContactSelected, data2 }) {
//   const lastStatus= status[status.length-1]
    return (
        <>
        
         <div className="contact-box" onClick={() =>  setStatusContactSelected(contact)}>
            <Header user={contact} />
            <div className="right-section">
                <div className="contact-box-header">
                    {/* <p>{status.length}</p> */}
                    <h3 className="avatar-title">{contact.name===data2.contact.name?'My status' : contact.name}</h3>
                    {/* <span className="time-mark">{lastStatus?.date?.toLocaleDateString()}</span> */}
                </div>
                <div className="last-msg">   
                </div>
            </div>
        </div>
        </>
    )
}
