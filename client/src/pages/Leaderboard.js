import React, { useState } from 'react'
import classes from './SelectLevel.module.css'
import LeaderboardCard from '../components/LeaderboardCard'
import Table from '../components/Table'
const Leaderboard = ({ levels }) => {
  const [selectedLevel, setSelectedLevel] = useState(levels[0])
  const selectHandler = (level) => {
    setSelectedLevel(level)
  }
  return (
    <>
      <div className={classes.grid}>
        {levels.map(level => {
          let selected = false
          if (level.title === selectedLevel.title) {
            selected = true
          }
          return <LeaderboardCard onSelect={() => selectHandler(level)} selected={selected} key={level.title} level={level} />
        }
        )}
      </div>
      <Table selectedLevel={selectedLevel} />
    </>
  )
}

export default Leaderboard
