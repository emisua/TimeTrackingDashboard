import data from '../data/data.json'
import Card from './Card'

const CardList = ({ time }) => {
  return data.map((card) => {
    return (
      <Card
        time={time}
        card={card}
        key={card.title}
      />
    )
  })
}
export default CardList
