import React, { useRef } from 'react'
import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Modal = ({ time, levelId, updateRanking }) => {
  const navigate = useNavigate()
  const { loading, sendRequest, error } = useFetch()
  const nameRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

    sendRequest({
      url: `/api/levels/${levelId}`,
      method: 'POST',
      body: JSON.stringify({
        name: nameRef.current.value,
        time
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }, () => {
      navigate('/', { replace: false })
      const newRanking = {
        name: nameRef.current.value,
        time,
        date: new Date()
      }
      updateRanking(levelId, newRanking)
    })
  }

  const cancelHandler = () => {
    navigate('/', { replace: false })
  }

  const formatSeconds = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(14, 19)
  }

  return (
    <div className={classes.modal}>
      <div className={classes.time}>Your total time is {formatSeconds(time)} </div>
      <div className={classes.body}>Submit your score on the global leaderboard!</div>

      <form onSubmit={submitHandler}>
        {error && <p>Server error!</p>}
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input ref={nameRef} type='text' name='name' id='name' required />
        </div>
        <div className={classes.footer}>
          <button onClick={cancelHandler} type='button' className={`${classes.btn} ${classes.cancel}`}>Cancel</button>
          <button className={classes.btn} type='submit'>{loading ? 'Loading...' : 'Submit score'}</button>
        </div>
      </form>
    </div>
  )
}

export default Modal
