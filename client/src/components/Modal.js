import React from 'react'
import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom'

const Modal = ({ time }) => {
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/leaderboard', { replace: false })
  }

  const cancelHandler = () => {
    navigate('/', { replace: false })
  }

  return (
    <div className={classes.modal}>
      <div className={classes.time}>Your total time is {time} </div>
      <div className={classes.body}>Submit your score on the global leaderboard!</div>

      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' />
        </div>
        <div className={classes.footer}>
          <button onClick={cancelHandler} type='button' className={`${classes.btn} ${classes.cancel}`}>Cancel</button>
          <button className={classes.btn} type='submit'>Submit score</button>
        </div>
      </form>
    </div>
  )
}

export default Modal
