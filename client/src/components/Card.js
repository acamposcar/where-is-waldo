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
      <div className={classes.title}>{level.title}</div>
      <div className={classes.characters}>
        {level.items.map(item => {
          return (
            <img key={item.name} className={classes.avatar} src={`/images/${item.image}`} alt={level.title} />
          )
        })}
      </div>
    </div>
  )
}

export default Card
