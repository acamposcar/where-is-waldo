import classes from './App.module.css'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import SelectLevel from './pages/SelectLevel'
import Level from './pages/Level'
import Header from './components/Header'
import Leaderboard from './pages/Leaderboard'
import useFetch from './hooks/useFetch'
import { useEffect, useState } from 'react'
import Spinner from './components/Spinner'

function App () {
  const { loading, sendRequest, error } = useFetch()
  const [levels, setLevels] = useState([])

  useEffect(() => {
    const saveLevels = (levelObj) => {
      const levelsArray = []
      for (const level of levelObj.levels) {
        levelsArray.push(
          level
        )
      }
      setLevels(levelsArray)
    }

    sendRequest({ url: '/api/levels' }, saveLevels)
  }, [sendRequest])

  const updateRankingHandler = (levelId, newRanking) => {
    console.log(levelId, newRanking)
    setLevels(prevState => {
      return prevState.map(level => {
        if (level._id === levelId) {
          return { ...level, ranking: [...level.ranking, newRanking] }
        }
        return level
      })
    })
  }
  return (
    <>
      <Header />

      <div className={classes.container}>
        {error && <h1>Error loading content!</h1>}
        {loading && <Spinner />}
        {!loading && levels?.length > 0 &&
          <Routes>
            <Route path='/' element={<SelectLevel levels={levels} />} />
            <Route path='/level/:title' element={<Level updateRanking={updateRankingHandler} levels={levels} />} />
            <Route path='/leaderboard/' element={<Leaderboard levels={levels} />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>}
      </div>
    </>
  )
}

export default App
