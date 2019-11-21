import React, { Component } from 'react';

export class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <img src={require(`../assets/images/me.jpeg`)} className="pic" alt="Felipe A. Bosi"/>
                <p className="nav__description">Full Stack Web Developer with experience in Node, React and JavaScript.</p>
                <a href="https://github.com/bosiarquitetura"><button className="nav__link">GitHub</button></a>
                <a href="https://www.linkedin.com/in/felipebosi/"><button className="nav__link">Linkedin</button></a>
                <a href="https://twitter.com/home"><button className="nav__link">Twitter</button></a>

                
            </nav>
        );
    }
}