import React from 'react'
import classes from './SelectLevel.module.css'
import Card from '../components/Card'

const SelectLevel = ({ levels }) => {
  return (
    <>

      <div className={classes.grid}>
        {levels.map(level => <Card key={level.title} level={level} />)}
      </div>
    </>
  )
}

export default SelectLevel
