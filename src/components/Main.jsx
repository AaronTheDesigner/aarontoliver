import React from 'react';
import { Switch, Route } from 'react-router';

import Contact from './Contact';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Landing from './Landing';


const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/Projects" component={Projects} />

        </Switch>
    )


}

export default Main;