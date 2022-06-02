import React from 'react'
import classes from './Table.module.css'

const Table = ({ selectedLevel }) => {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  const formatSeconds = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(14, 19)
  }
  return (
    <div className={classes.center}>
      <table className={classes.table}>
        <colgroup>
          <col style={{ width: '40%' }} />
          <col style={{ width: '30%' }} />
          <col style={{ width: '30%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            selectedLevel.ranking.map(player => {
              return (
                <tr key={Math.random() + player.date.toISOString()} className={classes.row}>
                  <td>{player.name.slice(0, 15)}</td>
                  <td>{formatSeconds(player.time)} min</td>
                  <td>{player.date.toLocaleDateString('en-US', dateOptions)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
