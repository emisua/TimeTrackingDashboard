import { useState } from 'react'
import CardList from './components/CardList'
import MainCard from './components/MainCard'
import './App.css'

function App() {
  const [time, setTime] = useState('daily')
  return (
    <div className='container'>
      <MainCard
        setTime={setTime}
        time={time}
      />
      <CardList time={time} />
    </div>
  )
}

export default App
