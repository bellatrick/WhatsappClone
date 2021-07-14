import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import StatusContactBox from './StatusContactBox'
import StatusWelcome from './StatusWelcome'
import { Create, ArrowBack} from '@material-ui/icons';
import {IconButton} from '@material-ui/core'
import StatusSlide from './StatusSlide'
export default function StatusView({currentUser, colorHex, currentStatus, data2, filteredContacts, filteredStatusContacts, setStatusContactSelected, statusContactSelected}) {
    return (
        <>
         <div className='app2'>
             
              <aside>
                <header>
            
                  <Link to='/'><IconButton><ArrowBack/></IconButton></Link>  
                  <IconButton>
                    <Link to='/statusinput'> <Create/></Link> 
                 </IconButton>
                </header>
                <div className="contact-boxes">
                    {filteredStatusContacts.map(({ contact, status }) => (
                     <StatusContactBox 
                     data2={data2}
                     contact={contact}
                     key={contact.id}
                     setStatusContactSelected={setStatusContactSelected}
                     status={status}
                    
                     />
                    ))}
                </div>
            </aside>
            {statusContactSelected.id ? (
                <main>
                    <header>
                        <Header user={statusContactSelected} showName />
                        
                    </header>
                  
                <StatusSlide colorHex={colorHex} status={currentStatus} data2={data2}/>
   
                </main>
            ) : (
                <StatusWelcome />
            )} 

        </div>
        </>
     )
}