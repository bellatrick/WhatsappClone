
import avatar1 from './images/avatar1.jpg'
import avatar2 from './images/avatar2.jpg'
import avatar3 from './images/avatar3.jpg'
import avatar4 from './images/fb-avatar-2.jpg'
export const contacts=[{
    name: 'Busayo',
    avatar: avatar3,
    phoneNumber:'0810',
    password: '0000',
    messages: [],
    status:[],
    id: 1,
    mainUser:true
  
  },
  {
    name: 'Winniefred',
    avatar: avatar4,
    phoneNumber: '0811',
    password: '1111',
    id: 2,
    mainUser:false
  },
  {
    name: 'Jude',
    avatar: avatar2,
    phoneNumber:'0812',
    password: '2222',
    id: 3,
    mainUser:false
  },
  {
    name: 'Tryphena',
    avatar: '',
    phoneNumber:'0813',
    password: '3333',
    id: 4,
    mainUser:false
  },
  {
    name: 'Tayo',
    avatar: avatar1,
    phoneNumber:'0814',
    password: '4444',
    id: 5,
    mainUser:false
  },
  ]


export class Message {
    constructor(isMainUser, msg, date,id) {
        this.msg = msg 
        this.isMainUser = isMainUser
        this.date = date
        this.id=id
    }
}
export class Status {
  constructor( status, date,id, color) {
      this.status = status 
      this.date = date
      this.id=id
      this.color=color
  }
}


export const contactsMessages = contacts.map((contact) => {
    return {
        contact,
        messages: [],
    }
})
export const contactsStatus = contacts.map((contact) => {
  return {
      contact,
      status: [],

  }
})