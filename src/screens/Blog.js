import React, { Component } from 'react';
import './Blog.scss';
import ReactMarkdown from 'react-markdown';
import CreateIcon from '@material-ui/icons/Create';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import CodeIcon from '@material-ui/icons/Code';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Avatar } from '@material-ui/core';
import { GitHub, LinkedIn, Twitter, VideogameAsset } from '@material-ui/icons';

export default class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <a className="blog-edit">
                    <CreateIcon />
                </a>

                <div className="blog__sections">
                    <section>
                        <h1>2020</h1>
                        <a className="active"><SportsEsportsIcon /> My first s&box project</a>
                        <a><MenuBookIcon /> Watch Dogs Legion review</a>
                        <a><CodeIcon /> ReactJS and Firebase</a>
                        <a><CodeIcon /> Food delivery</a>
                    </section>
                    <section>
                        <h1>2017</h1>
                        <a><SportsEsportsIcon /> My first game jam !</a>
                    </section>
                    <div className="blog__sections-medias">
                        <a href="https://github.com/suiramdev"><GitHub /></a>
                        <a href="https://twitter.com/suiramdev"><Twitter /></a>
                        <a href="https://suiramdev.itch.io"><VideogameAsset /></a>
                    </div>
                </div>
                <div className="blog__content">
                    <ReactMarkdown>
                        # Test
                    </ReactMarkdown>
                </div>
            </div>
        )
    }
}