import jeremy from '../assets/image-jeremy.png'
const MainCard = ({ setTime }) => {
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
      <nav>
        <ul>
          <li onClick={() => setTime('daily')}>
            <a>Daily</a>
          </li>
          <li onClick={() => setTime('weekly')}>
            <a>Weekly</a>
          </li>
          <li onClick={() => setTime('monthly')}>
            <a>Monthly</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainCard
