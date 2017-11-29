import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ProjectList from "./components/ProjectList";
import Project from "./components/Project";
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import SlideShow from './components/SlideShow'
import axios from 'axios'
import "./App.css";

class App extends Component {
  state = {
    projects: []
  }

  async componentWillMount() {
    try{
      const response = await axios.get('/api/projects')
      this.setState({projects: response.data})
      // console.log(response.data)
    } catch(error) {
      console.log(error)
    }
  }
    render() {
      const HomePageComponent = () => (<HomePage projects={this.state.projects} />)
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <Route exact path="/" component={ProjectList}/>
                    <Route path="/project/:id" component={Project}/>
                    <Route path="/about" component={AboutMe}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </Router>
        );
    }
}

export default App;
