
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProjectList = styled.div`
  font-family: 'Rubik';
  background-attachment: fixed;
   background-position: center;
  padding: 20px;
  margin-top: 150px;
  text-align: center;
  color: white;
  font-size:50px;
  max-width: 100%;
  height: 1%;
  backgroundImage{
    
    height: 50%
  }
`

const ProjectLink = styled.div`
  padding: 20px;
  margin: 100px;
  text-align: center;
  font-size: 75px;
  font-family: 'Rubik';
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-shadow: 1px 1px 2px
  }
`

const FillerDiv = styled.div`
height: 100px;
`

const HomePage = (props) => {
  return (
    <div>
      {
        props.projects.map((project) => {
          return (
            <ProjectList style={{ backgroundImage: `url(${project.photo_url})` }}>
              <ProjectLink><Link to={`/projects/${project.id}`}>{project.name}</Link></ProjectLink>
            </ProjectList>
            
          )
        })
      }
      <FillerDiv></FillerDiv>
    </div>
  )
}

export default HomePage