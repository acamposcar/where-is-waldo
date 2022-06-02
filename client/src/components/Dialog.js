import React from 'react'
import classes from './Dialog.module.css'
const Dialog = ({ itemsToFound, position, onSelection }) => {
  return (
    <div className={classes.dialog} style={{ top: position.y, left: position.x }}>
      {itemsToFound.map(item =>
        <div key={item.name}>
          <img onClick={() => onSelection(item.name)} className={`${classes.image} ${classes.btn}`} src={`/images/${item.image}`} alt={item.name} />

        </div>
      )}
    </div>
  )
}

export default Dialog
