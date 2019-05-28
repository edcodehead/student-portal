import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './../Home/Home';
import AboutUs from './../AboutUs/AboutUs';
import SignUp from './../SignUp/SignUp';
import Header from '../Header/Header';
import ThankYou from './../ThankYou/ThankYou';


class Layout extends Component { //You can use <React.Fragment></React.Fragment> in place of <div></div>
    render(){
        const loggedInUser = localStorage.getItem('loggedInUser');
        
        let routes = ( // When visitor or user is not logged in
            <React.Fragment>
                <Route exact path="/" component={SignUp} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/thank-you" component={ThankYou} />
            </React.Fragment>
        );

        if (loggedInUser){
            routes = ( // If user is logged in
                <React.Fragment>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                </React.Fragment>
            );
        }

        return ( // If user is logged in or out
            <React.Fragment>
                <Header {...this.props} />
                {routes}
                <Route exact path="/about-us" component={AboutUs} />
            </React.Fragment>
        );
    }
}

export default withRouter(Layout);