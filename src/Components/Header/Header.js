import React, { Component } from 'react'; // Typed in "rcc" to put this boiler plate code in
import { Link } from 'react-router-dom'; // Is a new way to link to another page. Replaces "a" and "href" with "Link" and "to"
import axios from 'axios';
// import SignUp from '../SignUp/SignUp';

class Header extends Component { // If you paste in a code. Make sure to change class into className. And close input fields with a / at the end
    
    state = {
        email: '',
        password: ''
    }

    signInChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState(
            {
                [name]:value
            }
        )
    }

    signInSubmitHandler = (event) => {
        event.preventDefault();
        const studentLogin = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:8080/loginStudent', studentLogin).then((response) => {
            const loggedInUser = response.data;
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser)); // "loggedInUser" is the key //localStorage is a cache
            this.props.history.push('/');
        }).catch(error =>{

        })
    }

    signOut = () => {
        localStorage.removeItem('loggedInUser');
        this.props.history.push('/');
    }

    render() {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        let headerDisplay = (
            <form className="form-inline mt-2 mt-md-0" onSubmit={this.signInSubmitHandler}>
            <input className="form-control mr-sm-2" type="text" placeholder="Email" onChange={this.signInChangeHandler} value={this.state.email} name="email"/>
            <input className="form-control mr-sm-2" type="password" placeholder="Password" onChange={this.signInChangeHandler} value={this.state.password} name="password"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
        </form>
        );
        let links = (
            <Link className="nav-link" to="/sign-up">Sign Up</Link>
        );
        if  (loggedInUser){
            links = (
            <Link className="nav-link" to="/" onClick={this.signOut}>Sign Out</Link>
            );

            headerDisplay = null;
        }

        return (
            <div className="header-margin">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link className="navbar-brand" to="/sign-up">Student Portal</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About Us</Link>
                        </li>
                    <li className="nav-item">
                        {links}
                     </li>
                    </ul>
                {headerDisplay}
                </div>
                </nav>
            </div>
            
        );
    }
}

export default Header;