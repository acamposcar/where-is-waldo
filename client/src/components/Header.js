import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Where is Waldo?</div>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : undefined} to='/'
        >Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active : undefined} to='/leaderboard'
        >Leaderboard
        </NavLink>

      </nav>
    </header>
  )
}

export default Header
