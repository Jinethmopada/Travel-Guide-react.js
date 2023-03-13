import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelItem from '../TravelItem'

import './index.css'

class TravelGuide extends Component {
  state = {travelList: [], isLoading: false}

  componentDidMount() {
    this.getTravelGuideList()
  }

  getTravelGuideList = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(item => ({
        id: item.id,
        name: item.name,
        imageUrl: item.image_url,
        description: item.description,
      }))
      this.setState({travelList: updatedData, isLoading: false})
    }
  }

  renderLoadingView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTravelGuideView = () => {
    const {travelList} = this.state
    return (
      <ul className="list-container">
        {travelList.map(eachItem => (
          <TravelItem key={eachItem.id} travelItemDetails={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? this.renderLoadingView() : this.renderTravelGuideView()}
      </div>
    )
  }
}

export default TravelGuide
