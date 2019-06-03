import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import pic from '../img/pic2.png';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Aaron Toliver</h2>
                        <img src={pic} className="avatar" alt="" />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1rem' }}>My primary form of contact is via phone. Feel free to call or text during standard business hours: Mon-Fri 8am-5pm. I can also be reached by email and by direct message on LinkedIn. I’ll be sure to return your call within one business day.
</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}> <i className="fa fa-phone-square" aria-hidden /> (980) 333-5498 </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}> <i className="fa fa-envelope" aria-hidden /> aaronaugustine85@gmail.com </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}> <i className="fab fa-linkedin" aria-hidden /> https://www.linkedin.com/in/aaron-toliver-14820262/ </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;