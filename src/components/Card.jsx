import dots from '../assets/icon-ellipsis.svg'

const Card = ({ card, time }) => {
  const { title, timeframes } = card
  console.log(card)
  const lastTime = () => {
    if (time === 'daily') {
      return 'Day'
    }
    if (time === 'monthly') {
      return 'Month'
    }
    return 'Week'
  }

  return (
    <div className='card'>
      <div className='title'>
        <h4>{title}</h4>
        <span>
          <img
            src={dots}
            alt=''
          />
        </span>
      </div>
      <h3 className='h1'>{timeframes[time].current}hrs</h3>
      <span>
        Last {lastTime()} - {timeframes[time].previous}
      </span>
    </div>
  )
}
export default Card
