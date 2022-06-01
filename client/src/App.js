import classes from './App.module.css'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import SelectLevel from './pages/SelectLevel'
import Level from './pages/Level'
import Header from './components/Header'

const levels = [
  { title: 'robot-city', image: 'robot-city.jpg', items: [{ name: 'Kenny', top: 0.5, left: 0.5, image: 'kenny.png' }, { name: 'Peter Griffin', top: 0.1, left: 0.1, image: 'peter.png' }, { name: 'Zoidberg', top: 0.2, left: 0.2, image: 'zoidberg.png' }] },
  { title: 'cyberpunk', image: 'cyberpunk.jpg', items: [{ name: 'Kenny', top: 0.5, left: 0.5, image: 'kenny.png' }, { name: 'Peter Griffin', top: 0.1, left: 0.1, image: 'peter.png' }, { name: 'Zoidberg', top: 0.2, left: 0.2, image: 'zoidberg.png' }] },
  { title: 'tunel-23', image: 'tunel-23.jpg', items: [{ name: 'Kenny', top: 0.5, left: 0.5, image: 'kenny.png' }, { name: 'Peter Griffin', top: 0.1, left: 0.1, image: 'peter.png' }, { name: 'Zoidberg', top: 0.2, left: 0.2, image: 'zoidberg.png' }] }
]

function App () {
  return (
    <>
      <Header />

      <div className={classes.container}>
        <Routes>
          <Route path='/' element={<SelectLevel levels={levels} />} />
          <Route path='/level/:title' element={<Level levels={levels} />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </>
  )
}

export default App
