import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../img/pic2.png';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12} >
                        <img
                            src={avatar}
                            alt="avatar"
                            className="avatar"
                        />
                        <div className="banner-text">
                            <h1>Aaron Toliver | Web Developer</h1>

                            <hr />

                            <p>HTML/CSS | Bootstrap | JavaScript | Python | MongoDB | NodeJS | Express | ...And More</p>


                            <div className="social">
                                <a href="https://www.linkedin.com/in/aaron-toliver-14820262/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" aria-hidden="true"></i></a>

                                <a href="https://github.com/AaronTheDesigner" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" aria-hidden="true"></i></a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;