import React, { useState, useEffect } from 'react'
import classes from './Level.module.css'
import { useParams } from 'react-router-dom'
import Dialog from '../components/Dialog'
import CharactersHeader from '../components/CharactersHeader'
const Level = ({ levels }) => {
  const { title } = useParams()
  const [currentLevel, setCurrentLevel] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const [dialogPosition, setDialogPosition] = useState({})
  const [relativeClickPosition, setRelativeClickPosition] = useState({})

  useEffect(() => {
    levels.forEach(level => {
      if (level.title === title) {
        setCurrentLevel(level)
      }
    })
  }, [levels, title])

  const getRelativeClickPosition = (rect, relativeLeft, relativeTop) => {
    const currentImageHeight = rect.height
    const currentImageWidth = rect.width
    setRelativeClickPosition({
      top: relativeTop / currentImageHeight, left: relativeLeft / currentImageWidth
    })
  }

  const toggleDialog = (e) => {
    const rect = e.target.getBoundingClientRect()
    const relativeImageLeft = e.clientX - rect.left
    const relativeImageTop = e.clientY - rect.top
    setDialogPosition({ x: relativeImageLeft, y: relativeImageTop })
    setShowDialog(prevState => !prevState)
    getRelativeClickPosition(rect, relativeImageLeft, relativeImageTop)
  }

  const handleSelection = (e) => {
    console.log(e.target.value)
    const [itemSelected] = currentLevel.items.filter(item => item.name === e.target.value)
    if (Math.abs(relativeClickPosition.top - itemSelected.top) < 0.05 && Math.abs(relativeClickPosition.left - itemSelected.left) < 0.05) {
      console.log('found')
    }
    setShowDialog(prevState => !prevState)
  }

  return (
    <>
      {showDialog ? <Dialog level={currentLevel} position={dialogPosition} onSelection={handleSelection} /> : ''}
      <CharactersHeader level={currentLevel} />
      <img className={classes.image} src={`/images/${currentLevel.image}`} alt={currentLevel.title} onClick={toggleDialog} />
    </>
  )
}

export default Level
