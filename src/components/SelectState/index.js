import {Component} from 'react'
import MySelect from '../MySelect'
import './index.css'

const options = [
  {
    value: '1',
    label: 'One',
  },
  {
    value: '2',
    label: 'Two',
  },
  {
    value: '3',
    label: 'Three',
  },
  {
    value: '4',
    label: 'Four',
  },
]

class SelectState extends Component {
  componentDidMount() {
    this.getStatesData()
  }

  getStatesData = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-ids'
    const option = {
      method: 'GET',
    }
    const response = await fetch(url, option)
    const fetchedData = await response.json()
    console.log(fetchedData)
  }

  handleChange = value => {
    this.setState({
      selected: value,
    })
  }

  render() {
    const {selected} = this.state
    return (
      <div className="select-state-box">
        <MySelect
          options={options}
          onChange={this.handleChange}
          selected={selected}
        />
      </div>
    )
  }
}

export default SelectState
