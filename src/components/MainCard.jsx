import jeremy from '../assets/image-jeremy.png'
import Nav from './Nav'
const MainCard = ({ time, setTime }) => {
  return (
    <div className='mainCard'>
      <header>
        <img
          src={jeremy}
          alt='Avatar de Jeremy'
        />
        <div className='content'>
          <span>Report for</span>
          <h1>
            Jeremy<br></br>Robson
          </h1>
        </div>
      </header>
      <Nav
        time={time}
        setTime={setTime}
      />
    </div>
  )
}

export default MainCard
