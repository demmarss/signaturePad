import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../src/components/partials/header'
import NavBar from '../src/components/partials/navBar'
import Footer from '../src/components/partials/footer'
import Signature from '../src/components/signature'


function App() {
    return (
        <Router>
            <NavBar/>

            <Switch>
                <Route exact path='/' component={Header}/>
                <Route exact path='/signature' component={Signature}/>

            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
