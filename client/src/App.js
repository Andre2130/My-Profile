import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ProjectList from "./components/ProjectList";
import Project from "./components/Project";
import NavBar from './components/NavBar'
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <div>
                        <div>
                            <div><Link to="/">All Projects</Link></div>
                        </div>
                    </div>

                    <Route exact path="/" component={ProjectList}/>
                    <Route path="/project/:id" component={Project}/>

                </div>
            </Router>
        );
    }
}

export default App;
