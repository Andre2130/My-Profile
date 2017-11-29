import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components'


const images = ['https://imgur.com/sUFOhiF.jpg',
'https://imgur.com/S4XZY18.jpg',
'https://imgur.com/92wBdTF.jpg',
'http://wethesauce.com/wp-content/uploads/2016/07/cropped-Sauce-Radio-Color-1-e1467740479569.png',
'https://imgur.com/YsCnwTs.jpg'];
  

class SlideShow extends Component {
    render() {
        // {this.props.projects.map(project => (
        //     images.push(project.photo_url)
        //     ))}
        return (
            
                
                <Slide
          images={images}
          duration="5000"
          transitionDuration="1000"
          height="200"
        />
            
        );
    }
}

export default SlideShow;