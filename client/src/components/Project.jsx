import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ProfilePic = styled.div`
display: inline-block;
width: 50px;
height: 50px;
border-radius: 50%;
float: left;
margin: 50px;
img{
    border-radius: 50%;
};
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
                <p>{this.state.project.description}</p>
                <a href={`${this.state.project.site_url}`}> <ProfilePic><img src={this.state.project.photo_url} height="500" width="500"/></ProfilePic></a>
            </div>
        );
    }
}

export default Project;