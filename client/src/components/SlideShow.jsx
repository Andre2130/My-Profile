import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

const images = [
    'http://robinsonwd.com/wp-content/uploads/2017/05/aboutDre-1-e1495134823129.jpg',
    'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAAt1AAAAJDkxM2ZmN2NlLTM5OGUtNGRlOS05MGVmLTliNTkzYzNlZjA0OA.jpg',
    'http://robinsonwd.com/wp-content/uploads/2017/05/aboutDre-1-e1495134823129.jpg',
    'https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAAt1AAAAJDkxM2ZmN2NlLTM5OGUtNGRlOS05MGVmLTliNTkzYzNlZjA0OA.jpg'
  ];

class SlideShow extends Component {
    render() {
        return (
            <div>
                <Slide
          images={images}
          duration="5000"
          transitionDuration="1000"
          scale="0.4"
        />
            </div>
        );
    }
}

export default SlideShow;