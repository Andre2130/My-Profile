import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

const ProjectDisplay = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
max-width: 300px;
text-align: center;
float:left;
margin: 10px;
padding: 20px; 
img{
    border-radius: 50%;
};
`
const Main = styled.div`
width: max;
text-align: center;
float:left;
margin: 10px;
padding: 20px; 
`

class ProjectList extends Component {
    constructor(){
        super();
        this.state = {
            error: '',
            projects: []
        }
    }

    componentWillMount(){
        this.fetchProjects();
    }

    fetchProjects = async () => {
        try {
            const res = await axios.get('/api/projects');
            await this.setState({projects: res.data});
            return res.data;
        }
        catch (err) {
            console.log(err)
            await this.setState({error: err.message})
            return err.message
        }

    }

    render() {
        if (this.state.error){
            return <div>{this.state.error}</div>
        }
        return (
            <Main>
                
                <h4>All projects</h4>
                {this.state.projects.map(project => (
                    <Link to={`project/${project.id}`} >
                              <div class="row">
                              <div class="col s1 m7">
                                <div class="card">
                                  <div class="card-image">
                                    <img src={project.photo_url} height="250" width="250"/>
                                  </div>
                                  <div class="card-content">
                                    <p>{project.description}</p>
                                  </div>
                                  <div class="card-action">
                                    <a href="#">{project.name}</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </Link>
                    
                ))}
            </Main>
        );
    }
}

export default ProjectList;