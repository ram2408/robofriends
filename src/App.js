import React,{Component} from 'react'
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'
import './index.css'
import Footer from './Footer'
class App extends Component {
	constructor(){
		super();
		this.state = {
			robots : robots,
			searchfield: ''
		} 
	}
	onSearchChange = (event) => {
		//console.log(event.target.value);
		this.setState({searchfield:event.target.value});
		
		//console.log(filteredRobots);
	}  
	render(){
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(
				this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='main-heading'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
				<Footer/>
			</div>
		);
	}
} 
export default App;