import { lastTime } from '../utilities/utilities'
import dots from '../assets/icon-ellipsis.svg'

const Card = ({ card, time }) => {
  const { title, timeframes } = card
  return (
    <div className='card'>
      <div className={`cardimg ${title.toLowerCase()}`}></div>
      <div className='cardBody'>
        <div className='title'>
          <h4>{title}</h4>
          <span className='dots'>
            <img
              src={dots}
              alt='dots'
            />
          </span>
        </div>
        <div className='times'>
          <h3 className='h1'>{timeframes[time].current}hrs</h3>
          <span>
            Last {lastTime()} - {timeframes[time].previous}hrs
          </span>
        </div>
      </div>
    </div>
  )
}
export default Card
