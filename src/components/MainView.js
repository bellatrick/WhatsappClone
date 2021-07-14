import React from 'react'
import {Link} from 'react-router-dom'
import {IconButton} from '@material-ui/core'
import Header from './Header'
import ContactBox from './ContactBox'
import MessagesContainer from './MessagesContainer'
import ChatInput from './ChatInput'
import Welcome from './Welcome'

import { ExitToApp, DonutLarge} from '@material-ui/icons';
export default function MainView({currentUser, filteredContacts, contactSelected, setContactSelected, handleLogOut, currentMessages, data2, pushMessage, setMessage, message}) {
    return (
        <>
              
              <aside>
                <header>
                    <div className=' logoutProfile'>
                    <IconButton onClick={handleLogOut}>
                    <ExitToApp/>
                    </IconButton>

                    <Header user={currentUser} showName/> 
                    </div>
                  
                   
                    <div>
                        {/* <IconButton>
                          <Link to='/statusinput'> <Create/></Link> 
                        </IconButton> */}

                        <IconButton>
                           <Link to='/statusview'><DonutLarge/></Link> 
                         </IconButton>
                        
                    </div>
                </header>
                <div className="contact-boxes">
                    {filteredContacts.map(({ contact, messages }) => (
                        <ContactBox
                            contact={contact}
                            key={contact.id}
                            setContactSelected={setContactSelected}
                            messages={messages.filter((message)=>message.id===data2.contact.id)}
                        />
                    ))}
                </div>
            </aside>
            {contactSelected.name ? (
                <main>
                    <header>
                        <Header user={contactSelected} showName />
                        
                      
                    </header>
                    <MessagesContainer messages={currentMessages} data2={data2}/>
                    <ChatInput message={message} setMessage={setMessage} pushMessage={pushMessage} />
                </main>
            ) : (
                <Welcome />
            )} 

        </>
    )
}
