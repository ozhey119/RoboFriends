import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
import HelpBox from '../components/HelpBox'
import './App.css';
import {robots} from '../robots';
import ReactTooltip from 'react-tooltip';

const sortRobots = (robots) => {
    robots.sort( (a,b) => {
        if (a.name > b.name)
            return 1;
        else if (a.name < b.name)
            return -1;
        else
            return 0;
    });
}
sortRobots(robots);
console.log(robots);

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    // get the robots list from a web page
    /*componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then (users => this.setState({robots: users}));        
    }*/


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render () {
        const { robots, searchfield } = this.state;
        const robotsFilter = robots.filter( (robot) => {
            if (searchfield.toLowerCase() === "friend") {
                return robot.type === "Friend";
            } else if (searchfield.toLowerCase() === "family") {
                return robot.type === "Family";
            } else
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        if (!robots.length) {
            return <h1 className='tc'>Loading..</h1>
        } else {
        return (    
            <React.Fragment>
                <div className='tc'>
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/> 
                    <HelpBox></HelpBox>
                <ReactTooltip multiline = {true}/>
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots = {robotsFilter} />
                    </ErrorBoundary>
                </Scroll>
                </div>
            </React.Fragment>
            );
        }
    }
}

export default App;