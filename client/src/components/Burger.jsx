import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

class Burger extends Component {
    render() {
        return (
            <Menu right >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="contact" className="menu-item" href="/project/3">React On Rails Project</a>
        <a id="contact" className="menu-item" href="/project/1">WordPress Project</a>
        <a id="contact" className="menu-item" href="/project/2">HTML/CSS/JS Project</a>
      </Menu>
        );
    }
}

export default Burger;