import { Button } from '@material-ui/core'
import React, {useState, useEffect, useCallback} from 'react'
import { actionTypes } from '../../reducer'
import { useStateValue } from '../../stateProvider'
import logo from '../images/WhatsApp.svg.png'
import './Login.css'

const Login = ({setCurrentUser,setData2, statusData, setData3Index, contacts, data, message, setFilterContacts, setFilterStatusContacts}) => {
     // eslint-disable-next-line
    const [{}, dispatch] = useStateValue()
    const [login, setlogin] = useState({phoneNo: '', password:''})
    const [error, seterror] = useState('')
   const signIn=(e)=>{
       e.preventDefault()
   const currUser= contacts.find(users=> users.phoneNumber===login.phoneNo)
    const data2= data.find(users=> users.contact.phoneNumber===login.phoneNo)
    const dataIndex3= data.findIndex(users=> users.contact.phoneNumber===login.phoneNo)
    setCurrentUser(currUser)
    setData3Index(dataIndex3)
    setData2(data2)
       console.log(login);
       if(currUser?.phoneNumber===login.phoneNo&&currUser?.password===login.password){
        dispatch({
            type: actionTypes.SET_USER,
            user: login
        }
      
        )}
        else{
              seterror('Invalid login details')
        }
    
   }
  const filterContacts= useCallback((data)=> {
    const savedContacts= data.filter(user=> user.contact.phoneNumber !== login.phoneNo)
    const loggedIn = data.find(user=>user.contact.phoneNumber===login.phoneNo)
    const mainContact = data.find(user=> user.contact.mainUser===true)
    const mainContactArr = data.filter(user=> user.contact.mainUser===true)
   if(!loggedIn) return
        if(loggedIn===mainContact){
            return setFilterContacts(savedContacts)
                    
        }else return setFilterContacts(mainContactArr)
},[ login, setFilterContacts])

const filterStatusContacts=useCallback((data)=> {
    const loggedIn = data.find(user=>user.contact.phoneNumber===login.phoneNo)
    const mainContact = data.find(user=> user.contact.mainUser===true)
    const mainContactArr = data.filter(user=> user.contact.phoneNumber===login.phoneNo  || user.contact.mainUser===true )
                                .sort((a, b) => b.contact.id - a.contact.id)
   if(!loggedIn) return
        if(loggedIn===mainContact){
            return setFilterStatusContacts(data)
                    
        }else return setFilterStatusContacts(mainContactArr)
},[ login, setFilterStatusContacts]) 
   useEffect(() => {
    filterContacts(data)
    filterStatusContacts(statusData)
  }, [login, data, message, statusData, filterContacts, filterStatusContacts])
    return (
        <div className='login'>
           
            <div className='login-container'>
            <p style={{fontSize:'15px', color:'white', maxWidth:'300px'}}> Note: This is a pc web app, and so it is not fully optimized for mobile devices</p>
    <img src={logo} alt='whatsapp logo'/>
   
            <div className='login-text'>
                <h1>Sign in to Whatsapp</h1>
            </div>
           <form className='form' onSubmit={signIn}>
           <div className='input-div'>
              <div>
                 
              <input autoFocus placeholder='Mobile number' type='phonenumber' value={login.phoneNo} onChange={(e)=> setlogin({...login, phoneNo: e.target.value}) } />
              </div>  
              
              <div className='input-container'><input placeholder='Verification' type='password' value={login.password} onChange={(e)=> setlogin({...login, password: e.target.value}) }/></div> 
            </div>
            <Button type='submit' onClick={signIn}>Sign in</Button>
           </form>
            <h5>{error&&error}</h5>
            <div style={{fontSize: '12px', color: 'white', maxWidth: '300px'}}>
          
                <p>MainUser: MobileNo-0810  Verification-0000</p>
                <p>User1: MobileNo-0811  Verification-1111</p>
                <p>User2: MobileNo-0812  Verification-2222</p>
                <p>User3: MobileNo-0813  Verification-3333</p>
                <p>User4: MobileNo-0814  Verification-4444</p>
              
            </div>
            </div>
        </div>
    )
}

export default Login
