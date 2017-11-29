import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ProfilePic = styled.div`
display: inline-block;
width: 100px;
height: 100px;
border-radius: 50%;
float: left;
margin: 50px;
position:relative;
`

class Project extends Component {
    state = {
        project: {},
    }

    componentWillMount() {
        const projectId = this.props.match.params.id;
        this.fetchprojectAndSongData(projectId)
    }

    fetchprojectAndSongData = async (projectId) => {
        try {
            const projectResponse = await axios.get(`/api/projects/${projectId}`)
            await this.setState({
                project: projectResponse.data,
            });
        }
        catch (error) {
            console.log(error)
            await this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div>
                <h4>{this.state.project.name}</h4>
                <br/>
                <br/>
                <p>{this.state.project.description}</p>
                <a href={`${this.state.project.site_url}`}> <ProfilePic><img src={this.state.project.photo_url} width="max"/></ProfilePic></a>
            </div>
        );
    }
}

export default Project;