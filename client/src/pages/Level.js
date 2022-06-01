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
  const [timer, setTimer] = useState(0)
  const [showInvalidAlert, setShowInvalidAlert] = useState(false)
  const [showValidAlert, setShowValidAlert] = useState(false)
  const [relativeClickPosition, setRelativeClickPosition] = useState({})

  useEffect(() => {
    levels.forEach(level => {
      if (level.title === title) {
        setCurrentLevel(level)
      }
    })
  }, [levels, title])

  useEffect(() => {
    const interval = setInterval(() => setTimer(prevState => prevState + 1), 1000)
    return () => clearInterval(interval)
  }, [])

  const getRelativeClickPosition = (rect, relativeLeft, relativeTop) => {
    const currentImageHeight = rect.height
    const currentImageWidth = rect.width
    setRelativeClickPosition({
      top: relativeTop / currentImageHeight, left: relativeLeft / currentImageWidth
    })
    console.log(relativeClickPosition)
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
    const [itemSelected] = currentLevel.items.filter(item => item.name === e.target.value)
    if (Math.abs(relativeClickPosition.top - itemSelected.top) < 0.05 && Math.abs(relativeClickPosition.left - itemSelected.left) < 0.05) {
      setShowInvalidAlert(false)
      setShowValidAlert(true)
      setTimeout(() => setShowValidAlert(false), 2000)

      setCurrentLevel(prevState => {
        const updatedItems = prevState.items.map(item => {
          if (item.name === itemSelected.name) {
            return { ...item, found: true }
          }
          return item
        })
        return {
          ...prevState, items: updatedItems
        }
      })
    } else {
      setShowInvalidAlert(true)
      setShowValidAlert(false)
      setTimeout(() => setShowInvalidAlert(false), 2000)
    }
    setShowDialog(prevState => !prevState)
  }
  const formatSeconds = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(14, 19)
  }

  return (
    <>
      {formatSeconds(timer)}
      {showDialog ? <Dialog level={currentLevel} position={dialogPosition} onSelection={handleSelection} /> : ''}
      <CharactersHeader characters={currentLevel.items} showInvalid={showInvalidAlert} showValid={showValidAlert} />
      <img className={classes.image} src={`/images/${currentLevel.image}`} alt={currentLevel.title} onClick={toggleDialog} />
    </>
  )
}

export default Level
