import React, { Component } from 'react';
import './Intro.scss';
import { motion } from 'framer-motion';

export default class Intro extends Component {
    constructor(props) {
        super(props);

        this.onAnimationComplete = this.onAnimationComplete.bind(this);
    }

    state = {
        done: false
    }

    onAnimationComplete() {
        this.setState({done: true});
    }

    render() {
        return (
            <motion.div animate={this.state.done && {opacity: 0, transitionEnd: {display: "none"}}} transition={{delay: 1.5}} className="intro">
                <div className="intro__content">
                    <motion.h1 initial={{y: 100}} animate={{y: 0}} transition={{delay: 1.5, duration: 1.5}}>HELLO,</motion.h1>
                    <div>
                        <motion.p initial={{y: -150}} animate={{y: 0}} transition={{delay: 2, duration: 1.2}} onAnimationComplete={this.onAnimationComplete}>
                            I'm Marius a indie web and game developer.
                            <br/>
                            Enjoy reading my blogs.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        )
    }
}
