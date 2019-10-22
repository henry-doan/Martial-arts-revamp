import React from 'react'

window.onkeyup = function(e) {
    let event = e.which || e.keyCode || 0; 

    if (event == 27) { 
        window.location.href = '/dashboard';
    }
}

const Hotkey = () => (
  <>
  </>
)

export default Hotkey;