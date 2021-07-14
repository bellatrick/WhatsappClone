import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'

import { SendSharp,Palette } from '@material-ui/icons'


export default function StatusInput({status, colorHex, setColorHex, setStatus, pushStatus}) {
    const colors=[  '#ff96c5',
                    '#ffb6f65',
                    '#610a0a',
                    '#50105a',
                    '#5c4033',
                    '#98e0e8',
                    '#55bed7',
                    '#df5900',
                    '#243640'
                   
                   
                ]
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const handleColorChange=()=>{
        setCount(prevState=> prevState+1)
        setColorHex(colors[count % colors.length])
     ref.current.focus()
    }
    return (
        <div className="status-input">
              <form>
              <div className='textareaContainer'>
            <textarea style={{backgroundColor: colorHex}} autoFocus value={status} ref={ref} placeholder='Type a status' rows='5' cols='18' maxLength='100' onChange={(e)=>setStatus(e.target.value)}/>
            </div>     
          <div className='palette'>< Palette onClick={handleColorChange}/> </div> 
          <div className='sendSharp'>
          {status&& <Link to='/statusView'> <SendSharp onClick={()=>{
             status&&pushStatus()}}/></Link>  }
          </div>
              </form>
           
        </div>
    )
}
