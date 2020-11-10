import React from 'react';
import { Component } from 'react';
import Content from '../components/Content'

class Skills extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Skills",
            
            frameworks: {
                title: "Frameworks",
                subtitle: "Here are a list of frameworks I use, React, Express, Flask, Node.js."
            },

            tools: {
                title: "Tools",
                subtitle: "Here are a list of tools I use. Python, Git, Github, Visual Studio Code, Linux, Docker, Nginx, Docker-Compose"
            },
            skills: {
                title: "Skills",
                subtitle: ""
            }

        }
    }
}

export default Skills;