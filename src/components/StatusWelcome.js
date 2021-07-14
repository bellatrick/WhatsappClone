import React from 'react'
import {DonutLarge} from '@material-ui/icons'

export default function StatusWelcome() {
    return (
        <div className="welcome">
            <DonutLarge/>
            <h2>Click on a contact to view their status updates</h2>
        </div>
    )
}