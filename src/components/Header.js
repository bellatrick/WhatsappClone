import { Avatar } from '@material-ui/core'
import React from 'react'

export default function Header({ user, showName }) {
    return (
        <div className="avatar-component">
            {/* <img className="avatar" src={user.avatar} alt="" /> */}
            <Avatar src={user.avatar}/> <div className='avatarText'>
            {showName && <h3 className="avatar-title">{user.name}</h3>}
            </div>
          
        </div>
    )
}
