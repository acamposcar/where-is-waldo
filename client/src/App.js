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

const levels = [
  { title: 'robot-city', image: 'robot-city.jpg', ranking: [{ name: 'PeplddddddddddddddddddddddddddddPeplddddddddddddddddddddddddddddPepldddddddddddddddddddddddddddd', time: 600, date: new Date() }, { name: 'Pepe', time: 300, date: new Date() }], items: [{ name: 'Kenny', top: 0.45, left: 0.59, image: 'kenny.png', found: false }, { name: 'Peter Griffin', top: 0.1, left: 0.1, image: 'peter.png', found: false }, { name: 'Zoidberg', top: 0.2, left: 0.2, image: 'zoidberg.png', found: false }] },
  { title: 'cyberpunk', image: 'cyberpunk.jpg', ranking: [{ name: 'Alex', time: 600, date: new Date() }, { name: 'Pepe', time: 300, date: new Date() }], items: [{ name: 'Kenny', top: 0.45, left: 0.59, image: 'kenny.png', found: false }, { name: 'Peter Griffin', top: 0.90, left: 0.75, image: 'peter.png', found: false }, { name: 'Zoidberg', top: 0.68, left: 0.84, image: 'zoidberg.png', found: false }] },
  { title: 'tunel-23', image: 'tunel-23.jpg', ranking: [{ name: 'DEeqd', time: 600, date: new Date() }, { name: 'Pepe', time: 300, date: new Date() }], items: [{ name: 'Kenny', top: 0.5, left: 0.5, image: 'kenny.png', found: false }, { name: 'Peter Griffin', top: 0.1, left: 0.1, image: 'peter.png', found: false }, { name: 'Zoidberg', top: 0.2, left: 0.2, image: 'zoidberg.png', found: false }] }
]

function App () {
  return (
    <>
      <Header />

      <div className={classes.container}>
        <Routes>
          <Route path='/' element={<SelectLevel levels={levels} />} />
          <Route path='/level/:title' element={<Level levels={levels} />} />
          <Route path='/leaderboard/' element={<Leaderboard levels={levels} />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </>
  )
}

export default App
