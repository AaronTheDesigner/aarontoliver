import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{}}>
                        <h4>{this.props.skill}</h4>
                        <br />
                        <ProgressBar style={{ margin: 'auto', width: '75%' }} progress={this.props.progress} />
                        <br />
                        <p>{this.props.description}</p>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;