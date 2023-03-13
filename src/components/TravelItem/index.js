import './index.css'

const TravelItem = props => {
  const {travelItemDetails} = props
  const {imageUrl, name, description} = travelItemDetails
  return (
    <li className="card-container">
      <img src={imageUrl} className="spot-img" alt={name} />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </li>
  )
}

export default TravelItem
