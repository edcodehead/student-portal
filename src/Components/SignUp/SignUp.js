import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {

    state = {
        student: {
            firstName: '',
            lastName: '',
            age: '',
            telephone: '',
            email: '',
            password: ''
        }
    }

    

    signUpSubmitHandler = (event) => { //I'm expecting an event
        event.preventDefault();
        // console.log("This is the student: " + this.state.student)
        axios.post('http://localhost:8080/submitStudentDetails', this.state.student).then((response)=>{

        this.props.history.push('/thank-you');

        })
    }

    signUpChangeHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        let tempStudent = {...this.state.student};
        // console.log(tempStudent.firstName);
        tempStudent[name] = value;
        this.setState(
            {
                student:tempStudent
            }
        )
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col">
                        
                    </div>
                    <div className="col-6 formBorder">
                        <h1 className="signUpTitle">Sign Up</h1>
                        <form onSubmit={this.signUpSubmitHandler}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="First name" onChange={this.signUpChangeHandler} value={this.state.student.firstName} name="firstName"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Last name" onChange={this.signUpChangeHandler} value={this.state.student.lastName} name="lastName"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Telephone" onChange={this.signUpChangeHandler} value={this.state.student.telephone} name="telephone"/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" placeholder="Age" onChange={this.signUpChangeHandler} value={this.state.student.age} name="age"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" onChange={this.signUpChangeHandler} value={this.state.student.email} name="email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" onChange={this.signUpChangeHandler} value={this.state.student.password} name="password" />
                        </div>
                            <button className="btn btn-success">Submit</button>  
                        </form>
                    </div>
                    <div className="col">
                       
                    </div>
                </div>
            </div>

        );
    }
}

export default SignUp;