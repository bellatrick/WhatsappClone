import React, { useState, useEffect } from 'react'
import { useStateValue } from './stateProvider';
import {  contactsMessages, Message, contacts, Status, contactsStatus } from './components/Data'
import { actionTypes } from './reducer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login';
import StatusInput from './components/StatusInput';
import StatusView from './components/StatusView';
import MainView from './components/MainView';

function App() {
    const [{LoggedInUser}, dispatch] =useStateValue()
    const [data, setData] = useState(contactsMessages)
    const [statusData, setStatusData] = useState(contactsStatus)
    const [contactSelected, setContactSelected] = useState({})
    const [statusContactSelected, setStatusContactSelected] = useState({})
    const [currentMessages, setCurrentMessages] = useState([])
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')
    const [filteredContacts, setFilterContacts] = useState([])
    const [filteredStatusContacts, setFilterStatusContacts] = useState([])
    const [data2, setData2] = useState(contactsMessages)
    const [dataIndex3, setData3Index]= useState('')
    const [currentUser, setCurrentUser]= useState({})
    const [currentStatus, setCurrentStatus] = useState([])
    const [colorHex, setColorHex] = useState('#243640')


    useEffect(() => {
        const currContact = data.find((d) => d.contact.id === contactSelected.id)
        const currStatusContact = statusData.find((d) => d.contact.id === statusContactSelected.id)
        setCurrentMessages((currContact && currContact.messages) || [])
        setCurrentStatus((currStatusContact && currStatusContact.status) || [])
    }, [contactSelected, statusContactSelected, statusData, data])


    const handleLogOut=()=>{
        dispatch({
            type: actionTypes.LOG_OUT
    })
    setContactSelected({})
    setStatusContactSelected({})
}

    function pushMessage() {
        const index = data.findIndex((d) => d.contact.id === contactSelected.id)  

        const newData = Object.assign([], data, {
            [index]: {
                contact: contactSelected,
                messages: [...data[index]?.messages, new Message(true, message, new Date(), data2.contact.id) ],
                messageRecieved: [...data[index]?.messages, new Message(false, message, new Date())],
            },
            [dataIndex3]: {
                contact: contacts[dataIndex3],
                messages: [...data[dataIndex3]?.messages, new Message(false, message, new Date(), contactSelected.id)],
                messageRecieved: [...data[dataIndex3]?.messages, new Message(false, message, new Date())],
            },
        })
       console.log(data)
        setData(newData)
        setMessage('')
    }

    function pushStatus() {  
      const newStatus = Object.assign([], statusData, {
        [dataIndex3]: {
            contact: contacts[dataIndex3],
            status: [...statusData[dataIndex3]?.status, new Status(status, new Date(), data2.contact.id, colorHex)]   
        },
    })
        setStatusData(newStatus)

        setStatus('')
        setStatusContactSelected({})
        console.log(statusData)
        console.log(currentStatus)
}
    return (
        <div className="app">
              {!LoggedInUser?<Login statusData={statusData} setFilterStatusContacts={setFilterStatusContacts} setData3Index={setData3Index} setData2={setData2} message={message} setData={setData} Message={Message} data={data} currentUser={currentUser} setCurrentUser={setCurrentUser} contacts={contacts} setFilterContacts={setFilterContacts} contactSelected={contactSelected}/>:
          <> 
             <Router>
              <Switch>
                <Route exact path='/'>
                    <MainView currentUser={currentUser}
                    filteredContacts={filteredContacts}
                    contactSelected={contactSelected} 
                    currentMessages={currentMessages}
                    data2={data2}
                    handleLogOut={handleLogOut}
                    setContactSelected={setContactSelected}
                    pushMessage={pushMessage} 
                    setMessage={setMessage}
                    message={message}/> 
                </Route>
                <Route path='/statusinput'>
                    <StatusInput colorHex={colorHex} setColorHex={setColorHex} pushStatus={pushStatus} status={status} setStatus={setStatus} statusContactSelected={statusContactSelected}/>
                </Route>
                <Route path='/statusview'>
                <StatusView colorHex={colorHex}  currentUser={currentUser} statusContactSelected={statusContactSelected} currentStatus={currentStatus} data2={data2} setStatusContactSelected={setStatusContactSelected} filteredStatusContacts={filteredStatusContacts} />
                </Route>
              </Switch>
              </Router>  
           
            </>}
        </div>
    )
}

export default App
