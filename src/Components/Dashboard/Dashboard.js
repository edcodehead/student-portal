import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {

state = {
    student:{}
}

componentDidMount(){

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const param = {
        email:loggedInUser.email
    }
    axios.get('http://localhost:8080/findStudentById',{params:param}).then(response =>{
        this.setState(
            {
                student: response.data
            }
        )
    })
}

    render() {
        return (
            <div>
                <div className="card border-success mb-3" style={{ 'maxWidth': '18rem' }}>
                <div className="card-header bg-transparent border-success">Report Card for {this.state.student.firstName}</div>
                <div className="card-body text-success">
                    <h5 className="card-title">Telephone: {this.state.student.telephone}</h5>
                    <p className="card-text">Age: {this.state.student.age}</p>
                </div>
                <div className="card-footer bg-transparent border-success">Email: {this.state.student.email}</div>
                </div>
            </div>
        );
    }
}

export default Dashboard;