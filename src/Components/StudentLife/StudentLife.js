import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList';

class StudentLife extends Component {

    state = {
        students: []
    }

    componentDidMount() { // Is a lifecycle hook inside React
        axios.get('http://localhost:8080/getAllStudents').then(response =>{
            this.setState(
            {
                students: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <StudentList students={this.state.students} />
            </div>
        );
    }
}

export default StudentLife;