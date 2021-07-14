import React, {useState, useEffect} from 'react'



export default function StatusSlide({status, colorHex}) {
    const statusArr= status.map(status=> status.status)
    const statusDate= status.map(status=> status.date)
    const statusHex= status.map(status=> status.color)
    const [timer, setTimer] = useState(0)
    useEffect(() => {
      const  statusTime=  setInterval(()=>{
             setTimer(prevTimer=> prevTimer+1)
         }, 3000)
         return () => {
            clearInterval(statusTime)
         } 
     }, [])
    return (
        <div className="status-view"  style={statusArr.length>0?{ backgroundColor:statusHex[timer%statusHex.length]}:{ backgroundColor:'#243640'}}>
        <div className='viewDiv'>
            <div className='timeDiv'>
            <p>{statusArr.length===0  ? '': statusDate[timer % statusDate.length].toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</p>
            </div>
            <div className='statusdiv'>
            <h3> {statusArr.length===0  ?'No status update yet 😢 ':statusArr[timer % statusArr.length]  }</h3>
           </div>  
        
        </div>
        </div>
           
               
        
    )
}

