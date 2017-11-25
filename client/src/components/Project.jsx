import React, {Component} from 'react';
import axios from 'axios';

class Project extends Component {

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
                hi
            </div>
        );
    }
}

export default Project;