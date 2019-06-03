import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Chip, ChipContact, Button } from 'react-mdl';
import bm from '../img/bm.jpg';
import fwcdc from '../img/fwcdc.png';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };

    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div style={{ width: '95%', margin: 'auto' }}>
                    <Grid>
                        <Cell col={6} tablet={12} phone={12} className="pro-card">
                            <h4>Books For The March  <Button><a href="https://github.com/AaronTheDesigner/Jay_Blog">GitHub</a></Button> | <Button> <a href="http://www.jayrequard.com/">Website</a> </Button> </h4>
                            <img src={bm} alt="" style={{ width: '100%' }} />
                            <div className="lang">
                                <h5>Languages</h5>
                                <Chip>
                                    <ChipContact className="mdl-color--purple">Py</ChipContact>
                                    Python
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--orange">HTML</ChipContact>
                                    HTML
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--blue">CSS</ChipContact>
                                    CSS
                                </Chip>
                            </div>
                            <div className="tech">
                                <h5>Tech</h5>
                                <Chip>
                                    <ChipContact className="mdl-color--teal">DJ</ChipContact>
                                    Django
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--grey">SQ</ChipContact>
                                    PostgressQL
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--white">SN</ChipContact>
                                    Django-Summernote
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--green">ST</ChipContact>
                                    Django-Storages
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--yellow">S3</ChipContact>
                                    AWS S3 Storage
                                </Chip>
                            </div>
                            <h5>Summary</h5>
                            <p>I built this website for Jay Requard, a rising author currently located in New York. I decided to learn Python as I wanted to take advantage of Django’s slug feature for future blog posts. The site features authentication, Amazon Web Services S3 Storage bucket, a Postgress database, and a well rounded content management system that allows the author to create, update and delete events, front page features, individual works, and blog posts. I am currently working on a newsletter feature.</p>
                        </Cell>
                        <Cell col={6} tablet={12} phone={12} className="pro-card">
                            <h4>First Ward Child Development Center <Button><a href="https://github.com/AaronTheDesigner/FWCDC">GitHub</a></Button> | <Button> <a href="http://www.firstwardcdc.com/">Website</a> </Button></h4>
                            <img src={fwcdc} alt="" style={{ width: '100%' }} />
                            <div className="lang">
                                <h5>Languages</h5>
                                <Chip>
                                    <ChipContact className="mdl-color--yellow">Js</ChipContact>
                                    JavaScript
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--orange">HTML</ChipContact>
                                    HTML
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--blue">CSS</ChipContact>
                                    CSS
                                </Chip>
                            </div>
                            <div className="tech">
                                <h5>Tech</h5>
                                <Chip>
                                    <ChipContact className="mdl-color--teal">N</ChipContact>
                                    Node.js
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--grey">Ex</ChipContact>
                                    Express
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--white">Ed</ChipContact>
                                    Edge.js
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--green">PS</ChipContact>
                                    Passport
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--yellow">M</ChipContact>
                                    MongoDB
                                </Chip>
                                <Chip>
                                    <ChipContact className="mdl-color--yellow">Mo</ChipContact>
                                    Mongoose
                                </Chip>
                            </div>
                            <h5>Summary</h5>
                            <p>Made for First Ward Child Development Center, located in Uptown Charlotte, North Carolina. This website is backed by a REStful API and is built on an MVC(Model, View, Controller) architecture. I built authentication using Passport, which allows the administration to use a content management system to create, read, update and delete special calendar dates.</p>
                        </Cell>
                    </Grid>

                </div>

            )
        } else {
            return (
                <div>
                    <h1>Coming Soon</h1>
                </div>
            )
        }
    }




    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Professional</Tab>
                    <Tab>Personal</Tab>
                </Tabs>

                <Grid className="projects-grid">
                    <Cell col={12} >
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;