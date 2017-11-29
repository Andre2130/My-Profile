import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Burger from './Burger'

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: grey;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const LogoImage = styled.img`
    height: 80px;
`

const LogoImageHolder = styled.div`
    width: 280px;
    display: flex;
    justify-content: center;
`

const NavBarLinkHolder = styled.div`
    display: flex;
    flex-direction: row;
    Justify-content: space-around;
    padding-right: 20px;
    padding-left: 10px;
`

const NavBarLinks = styled.button`
    font-family: 'Rubik', sans-serif;
    font-size: 25px;
    background: white;
    border: none;
    padding: 20px;
    a {
        text-decoration: none;
        color: black;
    } 
    a:hover {
        text-shadow: 1px 1px 2px
    }
`

const AppTitle = styled.h1`
    font-family: 'Rubik', sans-serif;
    a{
        text-decoration: none;
        color: black;
    }
    a:hover {
        text-shadow: 1px 1px 2px
    }
`


const NavBar = () => {
    return (
        <NavBarContainer>
            
            <Burger />
            <LogoImageHolder>
                <LogoImage src="data:image/png;base64,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" />
            </LogoImageHolder>
            <AppTitle><Link to="/">My Portfolio </Link></AppTitle>

            <NavBarLinkHolder>
                <NavBarLinks><Link to="/about">Full Stack</Link></NavBarLinks>
                <NavBarLinks><Link to="/contact">Web Developer</Link></NavBarLinks>
            </NavBarLinkHolder>
        </NavBarContainer >
    );
};

export default NavBar;