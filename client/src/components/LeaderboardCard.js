import React from 'react'
import classes from './LeaderboardCard.module.css'

const LeaderboardCard = ({ level, onSelect, selected }) => {
  const cardClasses = selected ? `${classes.card} ${classes.selected}` : classes.card
  return (
    <div className={cardClasses} onClick={onSelect}>
      <img src={`/images/${level.image}`} alt={level.title} />
    </div>
  )
}

export default LeaderboardCard
