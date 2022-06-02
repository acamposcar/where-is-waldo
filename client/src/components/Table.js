import React from 'react'
import classes from './Table.module.css'

const Table = ({ selectedLevel }) => {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  let position = 0
  return (
    <div className={classes.center}>
      <table className={classes.table}>
        <colgroup>
          <col style={{ width: '15%' }} />
          <col style={{ width: '30%' }} />
          <col style={{ width: '30%' }} />
          <col style={{ width: '25%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            selectedLevel.ranking.sort((a, b) => a.time - b.time).map(player => {
              position++
              return (
                <tr key={Math.random() + player.date} className={classes.row}>
                  <td>{position}</td>
                  <td>{player.name.slice(0, 15)}</td>
                  <td>{player.time} seconds</td>
                  <td>{new Date(player.date).toLocaleDateString('en-US', dateOptions)}</td>
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
