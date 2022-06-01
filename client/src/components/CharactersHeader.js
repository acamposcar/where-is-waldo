import React from 'react'
import classes from './CharactersHeader.module.css'

const CharactersHeader = ({ level }) => {
  return (
    <div className={classes.characters}>
      {level.items?.map(item =>
        <div key={item.name}>
          <img className={classes.character} src={`/images/${item.image}`} alt={item.name} />
        </div>
      )}
    </div>
  )
}

export default CharactersHeader
