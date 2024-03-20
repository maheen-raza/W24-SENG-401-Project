import React from 'react'
import "./ChangeGUI.css"

function ChangeGUI() {
  return (
    <div className='changestuff'>
      <div className='changeprompt'>
        <div className="changetitle">Change Username</div>
        <div className="Form">
                    <div className='inputbox'>
                      <h3 className='inputitle'>OLD USERNAME</h3>
                      <input class="input" placeholder="Old Username Here"/>
                    </div>
                    <div className='inputbox'>
                      <h3 className='inputitle'>NEW USERNAME</h3>
                      <input class="input" placeholder="New Username Here"/>
                    </div>
                    <button  className="button-28">Confirm</button>
                    
        </div>
      </div>
      
    </div>
    
  )
}

export default ChangeGUI