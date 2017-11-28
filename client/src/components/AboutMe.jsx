import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src="http://robinsonwd.com/wp-content/uploads/2017/05/aboutDre-1-e1495134823129.jpg"/>
            </div>
            <div class="card-content">
              <p>I have recently graduated from Georgia State University with a Bachelor’s degree in computer science. While I was in school I started my own website called WeTheSauce.com that I continue to maintain and update weekly. 
                  For the past few months I have been doing freelance web development for small businesses around my area.</p>
            </div>
            <div class="card-action">
              <a href="#">Andre Robinson</a>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default AboutMe;