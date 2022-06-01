import React from 'react'
import classes from './Card.module.css'
import { useNavigate } from 'react-router-dom'
const Card = ({ level }) => {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate(`/level/${level.title}`, { replace: false })
  }
  return (
    <div className={classes.card} onClick={clickHandler}>
      <img src={`/images/${level.image}`} alt={level.title} />
    </div>
  )
}

export default Card
