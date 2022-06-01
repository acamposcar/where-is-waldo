import React from 'react'
import classes from './CharactersHeader.module.css'

const CharactersHeader = ({ characters, showInvalid, showValid }) => {
  const image = (character) => {
    const imageClasses = character.found ? `${classes.character} ${classes.found}` : `${classes.character}`
    return <img className={imageClasses} src={`/images/${character.image}`} alt={character.name} />
  }

  let headerClasses = `${classes.characters}`
  if (showValid) {
    headerClasses += ` ${classes.valid}`
  } else if (showInvalid) {
    headerClasses += ` ${classes.invalid}`
  }

  return (
    <div className={headerClasses}>
      {characters?.map(character =>
        <div key={character.name}>
          {image(character)}
        </div>
      )}
    </div>
  )
}

export default CharactersHeader
