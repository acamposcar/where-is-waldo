import React from 'react'
import classes from './Dialog.module.css'
const Dialog = ({ level, position, onSelection }) => {
  return (
    <div className={classes.dialog} style={{ top: position.y, left: position.x }}>
      {level.items.map(item =>
        <div key={item.name}>
          <button value={item.name} onClick={onSelection} className={classes.btn}>{item.name}</button>
        </div>
      )}
    </div>
  )
}

export default Dialog
