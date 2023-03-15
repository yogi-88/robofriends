import React, {Component} from 'react'
import { robots } from './robots';
import CardList from './CardList';
import Searchbox from './Searchbox';



class App extends Component  {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) =>  {
    this.setState({searchfield: event.target.value})
    console.log(event.target.value)
    const filteredRobots = this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      
    })
    console.log(filteredRobots);
  }
  render(){
    return (
      <div className='tc'>
          <h1>RoboFriends</h1>
          <Searchbox searchChange={this.onSearchChange}/>
  
          <CardList robots={this.state.robots} />
  
      </div>
      
    )

  }
 
}

export default App;