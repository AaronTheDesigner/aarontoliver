import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom';

import Main from './components/Main';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title={<Link style={{ textDecoration: 'none', color: '#135058' }} to='/'>Aaron Toliver</Link>} className="header-color" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{ textDecoration: 'none', color: '#135058' }} to='/'>Aaron Toliver</Link>} className="header-color">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content">
            <Main />
          </div>
        </Content>
      </Layout>
    </div >

  );
}

export default App;
