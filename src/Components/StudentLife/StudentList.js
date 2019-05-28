import React from 'react'; 

const studentList = (props) => { // We are using function component because we are just printing stuff out and not doing anything with it
    return props.students.map((student, index) => 
        <div key={index} className="card border-success mb-3" style={{ 'maxWidth': '18rem' }}>
            <div className="card-header bg-transparent border-success">Report Card for {student.firstName}</div>
            <div className="card-body text-success">
                <h5 className="card-title">Telephone: {student.telephone}</h5>
                <p className="card-text">Age: {student.age}</p>
            </div>
            <div className="card-footer bg-transparent border-success">Email: {student.email}</div>
        </div>
    );
}

export default studentList;