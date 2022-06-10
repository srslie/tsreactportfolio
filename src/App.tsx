import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles/App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Personal from './components/Personal';
import Professional from './components/Professional';
import Contact from './components/Contact';

export interface emptyProps {}

const App: FC<emptyProps> = (props) => {
  return ( 
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/personal" component={Personal} />
          <Route path="/professional" component={Professional} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;