import React, { useState, useEffect } from 'react'
import classes from './Level.module.css'
import { useParams } from 'react-router-dom'
import Dialog from '../components/Dialog'
import CharactersHeader from '../components/CharactersHeader'
import Modal from '../components/Modal'
import Backdrop from '../components/Backdrop'

const Level = ({ levels }) => {
  const { title } = useParams()
  const [currentLevel, setCurrentLevel] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const [dialogPosition, setDialogPosition] = useState({})
  const [timer, setTimer] = useState(0)
  const [itemsToFound, setItemsToFound] = useState([])
  const [showInvalidAlert, setShowInvalidAlert] = useState(false)
  const [showValidAlert, setShowValidAlert] = useState(false)
  const [relativeClickPosition, setRelativeClickPosition] = useState({})
  const [totalTime, setTotalTime] = useState(0)

  useEffect(() => {
    levels.forEach(level => {
      if (level.title === title) {
        setCurrentLevel(level)
        setItemsToFound(level.items)
      }
    })
  }, [levels, title])

  useEffect(() => {
    const interval = setInterval(() => setTimer(prevState => prevState + 1), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (itemsToFound.length === 0) {
      setTotalTime(timer)
    }
  }, [itemsToFound.length])

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
    setDialogPosition({ x: relativeImageLeft, y: relativeImageTop + 260 })
    setShowDialog(prevState => !prevState)
    getRelativeClickPosition(rect, relativeImageLeft, relativeImageTop)
  }

  const handleSelection = (imageName) => {
    setShowDialog(prevState => !prevState)
    const [itemSelected] = currentLevel.items.filter(item => item.name === imageName)
    if (Math.abs(relativeClickPosition.top - itemSelected.top) < 0.05 && Math.abs(relativeClickPosition.left - itemSelected.left) < 0.05) {
      setShowInvalidAlert(false)
      setShowValidAlert(true)
      setTimeout(() => setShowValidAlert(false), 2000)

      setItemsToFound(prevState => prevState.filter(item => item.name !== itemSelected.name))

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
  }
  const formatSeconds = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(14, 19)
  }

  return (
    <>
      {itemsToFound.length > 0 && showDialog && <Dialog itemsToFound={itemsToFound} position={dialogPosition} onSelection={handleSelection} />}
      {itemsToFound.length > 0 && <CharactersHeader timer={formatSeconds(timer)} characters={currentLevel.items} showInvalid={showInvalidAlert} showValid={showValidAlert} />}
      <img className={classes.image} src={`/images/${currentLevel.image}`} alt={currentLevel.title} onClick={toggleDialog} />

      {itemsToFound.length === 0 && <Backdrop />}
      {itemsToFound.length === 0 && <Modal time={formatSeconds(totalTime)} />}

    </>
  )
}

export default Level
